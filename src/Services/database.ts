export type Database = {
  public: {
    Tables: {
      estates: {
        Row: {
          baths: number | null;
          created_at: string;
          description: string | null;
          id: number;
          id_image: number;
          location: string | null;
          pos_x: number | null;
          pos_y: number | null;
          price: number | null;
          rooms: number | null;
          sqrt: number | null;
          type: string | null;
          user_id: string | null;
        };
        Insert: {
          baths?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          id_image: number;
          location?: string | null;
          pos_x?: number | null;
          pos_y?: number | null;
          price?: number | null;
          rooms?: number | null;
          sqrt?: number | null;
          type?: string | null;
          user_id?: string | null;
        };
        Update: {
          baths?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          id_image?: number;
          location?: string | null;
          pos_x?: number | null;
          pos_y?: number | null;
          price?: number | null;
          rooms?: number | null;
          sqrt?: number | null;
          type?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "estates_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      images: {
        Row: {
          created_at: string;
          id: number;
          id_image: number | null;
          image: string | null;
          image_name: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          id_image?: number | null;
          image?: string | null;
          image_name?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          id_image?: number | null;
          image?: string | null;
          image_name?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "images_id_image_fkey";
            columns: ["id_image"];
            isOneToOne: false;
            referencedRelation: "estates";
            referencedColumns: ["id_image"];
          },
          {
            foreignKeyName: "images_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      options: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          number: number | null;
          role: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          number?: number | null;
          role?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          number?: number | null;
          role?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "options_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      value:
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "diamerisma"
        | "katoikia"
        | "grafeio"
        | "agrotemaxio"
        | "ouranoupoli"
        | "nearoda"
        | "ammoulianh"
        | "ierissos";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
