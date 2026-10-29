import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Privacidad">
      <h2>Responsable</h2>
      <p>
        <strong>[Nombre y apellidos o razón social]</strong>, NIF <strong>[NIF]</strong>, domicilio en{" "}
        <strong>[dirección fiscal]</strong>, correo <strong>[correo electrónico]</strong>.
      </p>
      <h2>Qué datos se tratan</h2>
      <p>
        Esta web no tiene formularios ni pide datos. Las reservas se hacen en Booksy, que trata tus datos según su propia política. Si escribes por WhatsApp, se tratan tu nombre, tu teléfono, los
        mensajes y las fotos que envíes, solo para responderte, valorar tu caso y gestionar tu cita.
      </p>
      <h2>Base legal y conservación</h2>
      <p>
        Tu consentimiento al escribir y, si reservas, la relación de servicio. Los datos se guardan mientras dure la
        relación y los plazos legales que correspondan. <strong>[Completar según el caso]</strong>
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
        <strong>[correo electrónico]</strong>, y reclamar ante la Agencia Española de Protección de Datos (aepd.es).
      </p>
      <h2>Cookies</h2>
      <p>
        Esta web no usa cookies propias de análisis ni de publicidad. El mapa de Google incrustado puede usar las
        suyas. <strong>[Revisar si se añade analítica]</strong>
      </p>
    </LegalPage>
  );
}
