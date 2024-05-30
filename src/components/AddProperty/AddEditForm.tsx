import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useAddImage } from "./AddPropertyHooks/useAddImage";
import { supabaseUrl } from "../../Services/supabase";
import Title from "../NavigationBar/Title";
import ImageDropDrag from "./ImageDropDrag/ImageDropDrag";
import { FormValues, schema } from "./AddPropertyHooks/addform.type";
import { useAddProperty } from "./AddPropertyHooks/useAddProperty";
import { usePropertiesContext } from "../Context/PropertiesContext";
import Spinner from "../../ui/Spinner";

import SelectTypeLoc from "../../ui/SelectTypeLoc";
import Label from "../../ui/Label";
import { useEditProperty } from "../EditPropery/EditPropertyHooks/useEditProperty";

import { PropertyInformationProps } from "../Property/PropertyInformation";
import { FaCircleExclamation } from "react-icons/fa6";
import { useGetUser } from "../Users/useGetUser";

export default function AddEditForm({ estate }: PropertyInformationProps) {
  const [files, setFiles] = useState<File[] | null | undefined>(null);
  const [error, setError] = useState<boolean>(false);
  const { UplodaImage, isPending: isUploadingImage } = useAddImage();
  const { InsertProperty, isPending: isInserting } = useAddProperty();
  const { latLng, isEditing } = usePropertiesContext();
  const { isPending, Update } = useEditProperty();
  const { user } = useGetUser();
  const user_id = user?.id;

  const property = estate;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues:
      isEditing === "edit"
        ? estate && {
            area: estate.sqrt ? estate.sqrt : 1,
            type: estate.type ? estate.type : "",
            bed: estate.rooms ? estate.rooms : 2,
            bath: estate.baths ? estate.baths : 2,
            description: estate.description ? estate.description : "",
            price: estate.price ? estate.price : 1,
            location: estate.location ? estate.location : "",
            posX: estate.pos_x ? estate.pos_x : 1,
            posY: estate.pos_y ? estate.pos_y : 1,
          }
        : {},
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setError(true);

    if (isEditing === "edit" || (files && files.length !== 0)) {
      const id =
        property && property.id
          ? property?.id
          : Math.round(Math.random() * 20000);
      const id_image =
        property && property.id_image
          ? property?.id_image
          : Math.round(Math.random() * 202000);

      const estate = {
        id: id,
        id_image: id_image,
        user_id: user_id,
        sqrt: data.area,
        type: data.type,
        location: data.location,
        price: data.price,
        pos_y: Number(data.posY),
        pos_x: Number(data.posX),
        rooms: data.bed,
        baths: data.bath,
        description: data.description,
      };
      if (files)
        for (let index = 0; index < files?.length; index++) {
          const fileName = `image-${id}-${id_image}-${Math.random()}`;
          const filepath = `${supabaseUrl}//storage/v1/object/public/Images/${fileName}`;
          UplodaImage({
            id,
            id_image,
            files,
            fileName,
            filepath,
            index,
            user_id,
          });
        }
      if (isEditing === "add") {
        InsertProperty(
          { estate, user_id },
          {
            onSuccess: () => {
              reset({
                posX: 0,
                posY: 0,
                area: 0,
                bath: 0,
                bed: 0,
                description: "",
                price: 0,
              });
              setFiles([]);
              setError(false);
            },
          }
        );
      } else {
        Update(
          { id, estate, user_id },
          {
            onSuccess: () => {
              setFiles([]);
              setError(false);
            },
          }
        );
      }
    }
  };

  useMemo(() => {
    if (isEditing === "add") {
      reset({
        posX: latLng?.lat,
        posY: latLng?.lng,
        area: undefined,
        bath: undefined,
        bed: undefined,
        description: "",
        price: undefined,
      });
    } else {
      reset({
        area: estate && estate.sqrt ? estate.sqrt : 1,
        type: estate && estate.type ? estate.type : "",
        bed: estate && estate.rooms ? estate.rooms : 2,
        bath: estate && estate.baths ? estate.baths : 2,
        description: estate && estate.description ? estate.description : "",
        price: estate && estate.price ? estate.price : 1,
        location: estate && estate.location ? estate.location : "",
        posX: latLng ? latLng.lat : estate && estate.pos_x ? estate.pos_x : 1,
        posY: latLng ? latLng.lng : estate && estate.pos_y ? estate.pos_y : 1,
      });
    }
  }, [latLng, estate]);

  return (
    <form
      className={
        isEditing
          ? `w-full h-fit  overflow-x-hidden  lg:relative  max-lg:h-fit flex flex-col justify-start items-center p-4  rounded-3xl border-1 max-sm:border-0  shadow-purple-500  bg-white gap-2 shadow-2xl text-black  max-xl:w-[90%] max-lg:w-full`
          : `w-full h-full scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-navbar  max-lg:h-full flex flex-col justify-start items-center p-4  rounded-3xl border-1 max-sm:border-0  shadow-purple-500 overflow-x-hidden bg-white gap-2 shadow-2xl text-black overflow-scroll max-xl:w-[90%] max-lg:w-full`
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      {isPending || isInserting || isUploadingImage ? (
        <Spinner />
      ) : (
        <>
          <Title>
            {isEditing === "add"
              ? " Πρoσθέστε Ακίνητο"
              : "Επεξεργασία Ακινήτου"}
          </Title>
          <div
            className="w-full h-full
            flex justify-center items-start max-xl:flex max-xl:flex-wrap "
          >
            <div className="w-[100%]  grid grid-cols-2  justify-center gap-2 p-2  max-lg:p-10  max-lg:gap-3 max-sm:p-2  max-lg:h-fit ">
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <div className="w-full h-fit  flex flex-col max-lg:items-start max-lg:justify-start text-white items-center  justify-start gap-1">
                    <Label>Τύπος Ακινήτου</Label>
                    <SelectTypeLoc role="type" field={field} />
                    <p className="w-fit text-sm  h-fit  text-red-900 flex items-center justify-center gap-1">
                      {" "}
                      {errors.location ? (
                        <>
                          <FaCircleExclamation size={15} />
                          {errors && errors.location?.message}
                        </>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                )}
              />
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <div className="w-full h-fit  flex flex-col max-lg:items-start max-lg:justify-start text-white items-center  justify-start gap-1">
                    <Label>Περιοχή</Label>
                    <SelectTypeLoc role="location" field={field} />
                    <p className="w-fit text-sm  h-fit  text-red-900 flex items-center justify-center gap-1">
                      {" "}
                      {errors.location ? (
                        <>
                          <FaCircleExclamation size={15} />
                          {errors && errors.location?.message}
                        </>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                )}
              />

              <FormRow
                register={register("area")}
                label="Εμβαδόν"
                placeholder="Εμβαδόν"
                type="number"
                input={true}
                errorMessage={errors.area?.message}
                role=""
              />
              <FormRow
                register={register("bath")}
                input={true}
                label="Μπάνια"
                placeholder="Μπάνια"
                type="number"
                errorMessage={errors.bath?.message}
                role=""
              />

              <FormRow
                register={register("price")}
                label="Τιμή"
                type="number"
                input={true}
                placeholder="Τιμή"
                errorMessage={errors.price?.message}
                role=""
              />

              <FormRow
                register={register("bed")}
                input={true}
                label="Δωμάτια"
                placeholder="Δωμάτια"
                type="number"
                errorMessage={errors.bed?.message}
                role=""
              />
            </div>
            <div className="w-full h-full flex flex-col  gap-2 items-center justify-center  ">
              <div className="w-full h-fit  flex items-center max-xl:grid max-xl:grid-cols-2 max-xl:h-[20%] max-xl:gap-3 max-lg:p-10 max-sm:p-2 max-lg:justify-center">
                <FormRow
                  register={register("posX")}
                  input={true}
                  label="Συντεταγμένες Άξονα Χ"
                  placeholder="Άξονας Χ"
                  errorMessage={errors.posX?.message}
                  role=""
                  latLng
                  type="number"
                />

                <FormRow
                  register={register("posY")}
                  input={true}
                  label="Συντεταγμένες Άξονα Υ"
                  placeholder="Άξονας Υ"
                  type="number"
                  errorMessage={errors.posY?.message}
                  role=""
                />
              </div>
              <div className="w-full h-full flex flex-row justify-center items-start  ">
                <FormRow
                  textarea={true}
                  register={register("description")}
                  label="Περιγραφή Ακινήτου"
                  errorMessage={errors.description?.message}
                  role=""
                />
                {<p>{error && errors.root?.message}</p>}
              </div>
            </div>
          </div>

          <div className="w-full h-full flex  justify-end items-end max-xl:min-w-[320px]  ">
            <ImageDropDrag setFiles={setFiles} files={files} />
          </div>
          <>
            {!files?.length && error && (
              <p className=" h-6 text-center   text-red-900">
                Πρέπει να βάλετε τουλάχιστον μία φωτογραφία{" "}
              </p>
            )}
          </>

          <button className="bg-button text-white w-[200px] text-2xl font-extralight rounded-full">
            Υποβολή
          </button>
        </>
      )}
    </form>
  );
}
