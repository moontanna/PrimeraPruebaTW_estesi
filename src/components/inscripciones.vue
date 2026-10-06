<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { cursos, inscripciones, type Inscripcion } from '../data/cursos'

const route = useRoute()
const idInicial = Number(route.query.curso)
const cursoInicial = cursos.find((curso) => curso.id === idInicial)

const nombre = ref('')
const correo = ref('')
const telefono = ref('')
const cursoId = ref(cursoInicial?.id.toString() ?? '')
const errorGuardado = ref('')
const inscripcionGuardada = ref<Inscripcion | null>(null)

const cursoSeleccionado = computed(() =>
  cursos.find((curso) => curso.id === Number(cursoId.value)),
)

function guardarInscripcion() {
  if (inscripcionGuardada.value) {
    return
  }

  const curso = cursoSeleccionado.value

  if (!curso) {
    errorGuardado.value = 'Selecciona un curso para continuar.'
    return
  }

  const nuevaInscripcion: Inscripcion = {
    nombre: nombre.value,
    correo: correo.value,
    telefono: telefono.value,
    cursoId: curso.id,
    cursoNombre: curso.nombre,
    fecha: new Date().toISOString(),
  }
  inscripciones.push(nuevaInscripcion)

  inscripcionGuardada.value = nuevaInscripcion
  errorGuardado.value = ''
}

function registrarOtraInscripcion() {
  nombre.value = ''
  correo.value = ''
  telefono.value = ''
  cursoId.value = ''
  inscripcionGuardada.value = null
  errorGuardado.value = ''
}
</script>

<template>
  <main class="pagina-inscripcion page-shell">
    <RouterLink to="/cursos" class="volver">← Volver a los cursos</RouterLink>
    <header class="encabezado">
      <h1 class="page-title">Inscripción a un curso</h1>
      <p class="page-intro">Completa tus datos y selecciona el curso que te interesa.</p>
    </header>

    <form class="formulario" @submit.prevent="guardarInscripcion">
      <label for="nombre">Nombre completo</label>
      <input id="nombre" v-model.trim="nombre" name="nombre" autocomplete="name" required :disabled="Boolean(inscripcionGuardada)" />

      <label for="correo">Correo electrónico</label>
      <input
        id="correo"
        v-model.trim="correo"
        name="correo"
        type="email"
        autocomplete="email"
        required
        :disabled="Boolean(inscripcionGuardada)"
      />

      <label for="telefono">Teléfono</label>
      <input
        id="telefono"
        v-model.trim="telefono"
        name="telefono"
        type="tel"
        autocomplete="tel"
        required
        :disabled="Boolean(inscripcionGuardada)"
      />

      <label for="curso">Curso</label>
      <select id="curso" v-model="cursoId" name="curso" required :disabled="Boolean(inscripcionGuardada)">
        <option value="" disabled>Selecciona un curso</option>
        <option v-for="curso in cursos" :key="curso.id" :value="curso.id.toString()">
          {{ curso.nombre }}
        </option>
      </select>

      <button type="submit" class="boton-enviar" :disabled="Boolean(inscripcionGuardada)">
        Guardar inscripción
      </button>

      <p v-if="errorGuardado" class="mensaje-error" role="alert">{{ errorGuardado }}</p>

      <section v-if="inscripcionGuardada" class="confirmacion" role="status" aria-live="polite">
        <span class="confirmacion-icono" aria-hidden="true">✓</span>
        <div>
          <h2>Inscripción registrada</h2>
          <p>
            {{ inscripcionGuardada.nombre }}, registramos tu solicitud para
            <strong>{{ inscripcionGuardada.cursoNombre }}</strong>.
          </p>
        </div>
        <button type="button" class="boton-secundario" @click="registrarOtraInscripcion">
          Registrar otra
        </button>
      </section>
    </form>
  </main>
</template>

<style scoped>
.pagina-inscripcion {
  --page-width: 720px;
}

.volver {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--brand-purple);
}

.encabezado {
  margin-bottom: 28px;
}

.formulario {
  display: grid;
  gap: 10px;
  padding: 24px;
  border: 1px solid rgb(98 55 135 / 16%);
  border-radius: 16px;
  background: #faf7ff;
}

.formulario label {
  margin-top: 8px;
  font-weight: 600;
}

.formulario input,
.formulario select {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid #b8a9c7;
  border-radius: 8px;
  background: #fff;
  color: var(--brand-purple-deep);
  font: inherit;
}

.formulario input:focus,
.formulario select:focus {
  outline: 2px solid var(--brand-purple);
  outline-offset: 2px;
}

.formulario input:disabled,
.formulario select:disabled {
  background: #f0edf3;
  color: #655a6d;
  cursor: not-allowed;
}

.boton-enviar {
  min-height: 46px;
  margin-top: 14px;
  padding: 10px 16px;
  border: 0;
  border-radius: 24px;
  background: var(--brand-purple);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.boton-enviar:hover,
.boton-enviar:focus-visible {
  background: var(--brand-purple-deep);
}

.boton-enviar:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.mensaje-error {
  margin: 4px 0 0;
  color: #a12622;
  font-weight: 600;
}

.confirmacion {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 14px;
  margin-top: 12px;
  padding: 18px;
  border: 1px solid #9cc7a2;
  border-radius: 12px;
  background: #f1faf2;
  color: #1d4d2a;
}

.confirmacion-icono {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 50%;
  background: #d8efdc;
  font-weight: 800;
}

.confirmacion h2,
.confirmacion p {
  margin: 0 0 6px;
}

.nota-persistencia {
  font-size: 14px;
}

.boton-secundario {
  grid-column: 2;
  justify-self: start;
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid currentColor;
  border-radius: 20px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 520px) {
  .formulario {
    padding: 18px;
  }

  .pagina-inscripcion {
    width: min(100% - 32px, 520px);
    padding-top: 24px;
  }
}
</style>
