import { usePropertiesContext } from "../components/Context/PropertiesContext";

export const Caption = ({ role }: { role: string }) => {
  let title: string = "";
  let mobileTitle: string = "";

  const { width } = usePropertiesContext();

  if (role === "bath") {
    title = "Αριθμός Μπάνιων";
    if (width < 1024) {
      mobileTitle = "Μπάνια";
    }
  }

  if (role === "bed") {
    title = "Αριθμός Δωματίων";
    if (width < 1024) {
      mobileTitle = "Δωμάτια";
    }
  }

  if (role === "type") {
    title = "Τύπος Ακινήτου";
    if (width < 1024) {
      mobileTitle = "Τύπος";
    }
  }
  if (role === "location") {
    title = "Περιοχές";
    mobileTitle = title;
  }
  if (role === "price") {
    title = " Μέγιστη Τιμή";
    if (width < 1024) {
      mobileTitle = "Τιμή";
    }
  }

  if (role === "area") {
    title = " Μέγιστη Τιμή Εμβαδού";
    if (width < 1024) {
      mobileTitle = "Εμβαδόν";
    }
  }

  return { title, mobileTitle };
};
