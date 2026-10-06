<template>
  <main class="aviso-privacidad">
    <h1>Aviso de privacidad</h1>
    <p>
      La Facultad de Contaduría y Administración, en adelante “la Facultad”, es
      responsable del tratamiento y protección de los datos personales que
      sean proporcionados por los usuarios a través de este sitio web.
    </p>

    <section>
      <h2>1. Datos personales que podemos recopilar</h2>
      <h3>Datos que podemos solicitar</h3>
      <p>
        Al utilizar nuestros servicios, formularios o medios de contacto,
        podemos solicitar algunos datos personales como:
      </p>
      <ul>
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Número telefónico</li>
        <li>Información académica</li>
        <li>Información relacionada con los cursos seleccionados</li>
      </ul>
      <h3>Uso limitado de los datos</h3>
      <p>
        La Facultad únicamente solicitará los datos necesarios para brindar los
        servicios y mantener comunicación con los usuarios.
      </p>
    </section>

    <section>
      <h2>2. Finalidad del uso de los datos</h2>
      <h3>Usos de la información</h3>
      <p>Los datos personales serán utilizados para:</p>
      <ul>
        <li>Registrar a los usuarios en los cursos.</li>
        <li>Proporcionar información sobre cursos y certificaciones.</li>
        <li>Responder dudas y solicitudes de contacto.</li>
        <li>Enviar información relacionada con actividades académicas.</li>
        <li>Mejorar los servicios y contenidos de la plataforma.</li>
        <li>Dar seguimiento a la participación de los estudiantes.</li>
      </ul>
    </section>

    <section>
      <h2>3. Protección de la información</h2>
      <h3>Medidas de seguridad</h3>
      <p>
        La Facultad implementará medidas de seguridad administrativas, técnicas
        y físicas para proteger los datos personales contra pérdida,
        alteración, acceso, uso o divulgación no autorizada.
      </p>
      <h3>Uso para las finalidades señaladas</h3>
      <p>
        Los datos proporcionados no serán utilizados para fines distintos a los
        establecidos en este aviso sin autorización previa del usuario, salvo
        aquellos casos permitidos por la legislación aplicable.
      </p>
    </section>

    <section>
      <h2>4. Derechos del usuario</h2>
      <h3>Solicitudes sobre datos personales</h3>
      <p>
        El usuario puede solicitar el acceso, corrección, actualización o
        eliminación de sus datos personales, así como limitar su uso cuando
        corresponda.
      </p>
      <p>
        Para realizar una solicitud relacionada con sus datos personales, el
        usuario puede comunicarse mediante:
      </p>
      <p>
        <strong>Correo:</strong>
        <a href="mailto:privacidad@facultad.edu.mx">
          privacidad@facultad.edu.mx
        </a>
      </p>
    </section>

    <section>
      <h2>5. Uso de cookies</h2>
      <h3>Preferencias de cookies</h3>
      <p>
        Este sitio puede utilizar cookies y tecnologías similares para mejorar
        la navegación, recordar determinadas preferencias y obtener información
        estadística sobre el uso de la plataforma.
      </p>
      <p>
        El usuario puede configurar su navegador para aceptar, bloquear o
        eliminar las cookies.
      </p>
    </section>

    <section>
      <h2>6. Cambios al aviso de privacidad</h2>
      <h3>Actualizaciones</h3>
      <p>
        La Facultad podrá modificar o actualizar este Aviso de Privacidad
        cuando sea necesario. Cualquier cambio será publicado en este mismo
        sitio web.
      </p>
    </section>

    <p><strong>Última actualización:</strong> 5 de octubre de 2026.</p>
  </main>
</template>

<style scoped>
.aviso-privacidad {
  max-width: 900px;
  margin: 0 auto;
  padding: 28px 24px 40px;
  color: var(--brand-purple-deep);
  font-size: 16px;
  line-height: 1.55;
  text-align: left;
}

h1 {
  margin: 0 0 16px;
  color: var(--brand-purple);
  font-size: 2rem;
  line-height: 1.25;
}

h2 {
  margin: 24px 0 8px;
  color: var(--brand-purple);
  font-size: 1.25rem;
  line-height: 1.35;
}

h3 {
  margin: 14px 0 4px;
  color: var(--brand-purple-deep);
  font-size: 1rem;
  line-height: 1.4;
}

p {
  margin: 0 0 10px;
}

ul {
  margin: 4px 0 12px;
  padding-left: 24px;
}

li {
  padding-left: 2px;
}

a {
  color: var(--brand-purple);
}

@media (max-width: 600px) {
  .aviso-privacidad {
    padding: 24px 18px 32px;
    font-size: 15px;
  }

  h1 {
    font-size: 1.7rem;
  }
}
</style>