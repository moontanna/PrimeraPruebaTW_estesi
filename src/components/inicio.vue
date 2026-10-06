<script setup lang="ts">
import { computed, ref } from 'vue'
import { getCursosByFiltro } from '../bases/impfunciones'

const cursosDestacados = computed(() => getCursosByFiltro('destacados'))
const indiceDestacado = ref(0)
const cursoActual = computed(
  () => cursosDestacados.value[indiceDestacado.value],
)

function cambiarDestacado(direccion: number) {
  const total = cursosDestacados.value.length
  if (total === 0) return
  indiceDestacado.value = (indiceDestacado.value + direccion + total) % total
}
</script>

<template>
  <main class="pagina-inicio page-shell">
    <header class="encabezado">
      <h1 class="page-title">Inicio</h1>
      <p class="page-intro">Explora nuestros cursos más solicitados</p>
    </header>

    <section
      v-if="cursoActual"
      class="carrusel-destacados"
      aria-label="Cursos más solicitados"
    >
      <h2>Cursos más solicitados</h2>
      <div class="carrusel-contenido">
        <button
          class="carrusel-control"
          type="button"
          aria-label="Curso destacado anterior"
          @click="cambiarDestacado(-1)"
        >
          ‹
        </button>

        <article class="tarjeta" aria-live="polite">
          <div
            class="portada"
            :class="`portada-${(cursoActual.id - 1) % 5 + 1}`"
          >
            <span class="iniciales" aria-hidden="true">UADY</span>
            <span class="insignia">Más solicitado</span>
          </div>
          <div class="informacion">
            <p class="programa">Cursos UADY</p>
            <h3>
              <RouterLink
                :to="{ name: 'detalle-curso', params: { id: cursoActual.id } }"
                class="enlace-curso"
              >
                {{ cursoActual.nombre }}
              </RouterLink>
            </h3>
          </div>
        </article>

        <button
          class="carrusel-control"
          type="button"
          aria-label="Siguiente curso destacado"
          @click="cambiarDestacado(1)"
        >
          ›
        </button>
      </div>

      <div class="indicadores" aria-label="Seleccionar curso destacado">
        <button
          v-for="(curso, indice) in cursosDestacados"
          :key="curso.id"
          type="button"
          :class="{ activo: indice === indiceDestacado }"
          :aria-label="`Mostrar ${curso.nombre}`"
          :aria-current="indice === indiceDestacado ? 'true' : undefined"
          @click="indiceDestacado = indice"
        ></button>
      </div>
      <figure class="imagen-contaduria">
        <img
          src="https://www.contadoresmexico.org.mx/Productos/img/45a-Semana-de-la-Contaduria-Publica-VDCP0226"
          alt="Imagen de la Semana de la Contaduría Pública"
          loading="lazy"
        />
      </figure>
            <figure class="imagen-contaduria">
        <img
          src="https://st.mextudia.com/wp-content/uploads/2024/09/How-to-Find-Accountant-in-Manchester-1024x675-1-e1727201667946.jpeg"
          loading="lazy"
        />
      </figure>
     
    </section>
  </main>
</template>

<style scoped>
.pagina-inicio {
  --page-width: 1320px;
}

.encabezado {
  margin-bottom: 28px;
}

.carrusel-destacados {
  margin: 28px 0;
}

.carrusel-destacados > h2 {
  margin-bottom: 14px;
  color: var(--brand-purple);
  font-size: 24px;
}

.carrusel-contenido {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.tarjeta {
  width: min(100%, 620px);
  min-width: 0;
}

.portada {
  position: relative;
  display: flex;
  aspect-ratio: 1.8 / 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 18px;
  background-image:
    linear-gradient(rgb(58 27 69 / 18%), rgb(58 27 69 / 18%)),
    url('https://imgs.search.brave.com/t2SpGdHf9arqCCcBO_aKAg-muV78KaEbw0thk0P0hoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc2No/b29sLXBpY3R1cmVz/LTcyaWFuMmJsa3pq/cHVvdXUuanBn');
  background-position: center;
  background-size: cover;
}

.iniciales {
  color: var(--brand-ivory);
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-shadow: 0 2px 12px rgb(0 0 0 / 28%);
}

.insignia {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 10px;
  border-radius: 14px;
  background: var(--brand-ivory);
  color: var(--brand-purple-deep);
  font-size: 12px;
  font-weight: 700;
}

.informacion {
  padding: 12px 20px 16px;
  border-radius: 0 0 10px 10px;
  background: var(--brand-surface);
}

.programa {
  margin: 0 0 6px;
  color: var(--brand-purple);
  font-size: 13px;
  font-weight: 700;
}

.informacion h3 {
  margin: 0;
  color: var(--brand-purple-deep);
  font-size: 20px;
  line-height: 1.35;
}

.enlace-curso {
  color: inherit;
  text-decoration: none;
}

.enlace-curso:hover,
.enlace-curso:focus-visible {
  color: var(--brand-purple);
  text-decoration: underline;
}

.carrusel-control {
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--brand-gold);
  border-radius: 50%;
  background: var(--brand-purple);
  color: var(--brand-ivory);
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}

.carrusel-control:hover,
.carrusel-control:focus-visible {
  background: var(--brand-purple-deep);
}

.indicadores {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}

.indicadores button {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--brand-gold);
  opacity: 0.45;
  cursor: pointer;
}

.indicadores button.activo {
  transform: scale(1.2);
  opacity: 1;
}

.imagen-contaduria {
  display: grid;
  gap: 14px;
  width: min(100%, 900px);
  margin: 32px auto 0;
  overflow: hidden;
  border: 1px solid rgb(58 27 69 / 10%);
  border-radius: 20px;
  background: var(--brand-surface);
  box-shadow: 0 12px 32px rgb(45 20 54 / 16%);
}

.imagen-contaduria img {
  display: block;
  width: 100%;
  max-height: 480px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 600px) {
  .pagina-inicio {
    width: min(100% - 32px, 520px);
    padding-top: 24px;
  }

  .carrusel-contenido {
    gap: 8px;
  }

  .carrusel-control {
    width: 34px;
    height: 34px;
    font-size: 24px;
  }

  .imagen-contaduria {
    margin-top: 24px;
    border-radius: 14px;
  }
}
</style>