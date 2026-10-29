import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular de la web</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se informa de que esta web pertenece a <strong>[nombre y apellidos o razón social]</strong>, con
        NIF <strong>[NIF]</strong> y domicilio en <strong>[dirección fiscal]</strong>, que opera con el nombre comercial{" "}
        {site.fullName}.
      </p>
      <p>
        Contacto: WhatsApp {site.phone} · correo <strong>[correo electrónico]</strong>.
      </p>
      <h2>Uso de la web</h2>
      <p>
        La web informa sobre los tratamientos y precios del centro. Los precios pueden cambiar; el precio final se
        confirma antes de cada tratamiento.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Las fotografías, el logotipo y los textos pertenecen a su titular. No se pueden reproducir sin permiso.
      </p>
      <h2>Enlaces externos</h2>
      <p>
        La web enlaza a Booksy, WhatsApp, Google Maps, Instagram y Facebook. Cada servicio tiene sus propias condiciones y
        política de privacidad.
      </p>
    </LegalPage>
  );
}
