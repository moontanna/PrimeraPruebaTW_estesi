<template>
  <footer class="footer">
    <div class="footer-principal">
      <a
        class="marca"
        aria-label="Universidad Autónoma de Yucatán"
       
      >
        <strong class="marca-texto">UADY</strong>
       
      </a>

      <div class="footer-mensaje">
        <strong class="marca-subtexto">Cursos gratuitos para ti</strong>
        <RouterLink to="/aviso-privacidad" class="aviso-link">
          Aviso de Privacidad
        </RouterLink>
        <p class="coordinacion">
          Coordinación General de Tecnologías de Información y Comunicación
        </p>
      </div>
    </div>

    <div class="footer-inferior">
      <div class="contactos">
        <a href="https://www.uady.mx/" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
          </svg>
          UADY
        </a>
        <a href="mailto:atencion.uadyvirtual@correo.uady.mx">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          atencion.uadyvirtual@correo.uady.mx
        </a>

      </div>

      <div class="redes" aria-label="Redes sociales">
        <span aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2a10 10 0 1 0 1.8 19.84v-7.03h2.35l.35-2.74H13.8v-1.75c0-.8.23-1.34 1.37-1.34h1.46V6.53c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2.04H8.68v2.74h2.35v7.04A10 10 0 0 0 12 2Z"
            />
          </svg>
        </span>
        <span aria-label="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22 8.1a2.8 2.8 0 0 0-2-2C18.2 5.6 12 5.6 12 5.6s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.5 12a29 29 0 0 0 .5 3.9 2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22.5 12a29 29 0 0 0-.5-3.9ZM9.9 15.2V8.8l5.5 3.2-5.5 3.2Z"
            />
          </svg>
        </span>
        <span aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle class="punto" cx="17.5" cy="6.8" r="1" />
            <a href="https://www.instagram.com/hq_jana777/" target="_blank" rel="noopener noreferrer" />
          </svg>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  box-sizing: border-box;
  margin-top: 2rem;
  padding: 30px 3.2% 18px;
  border-radius: 38px 38px 0 0;
  background: var(--brand-purple);
  color: #f4f5f7;
  font-size: 14px;
}

.footer-principal {
  display: grid;
  min-height: 172px;
  grid-template-columns: minmax(220px, 340px) 1fr;
  align-items: center;
  gap: 36px;
  padding: 0 5%;
}

.marca {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.marca-texto {
  font-family: Georgia, serif;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 1px;
}
.marca-subtexto {
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
}

.footer-mensaje {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  justify-self: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  line-height: 1.6;
  color: whitesmoke;
}

.aviso-link {
  color: inherit;
}

.coordinacion {
  margin-top: 8px;
}

.footer-inferior {
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 12px;
  padding: 12px 2px 0;
  border-top: 1px solid rgb(244 245 247 / 22%);
}

.contactos,
.redes {
  display: flex;
  align-items: center;
  gap: 18px;
}

.contactos a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: inherit;
  font-size: 12px;
  text-decoration: none;
}

.contactos a:hover {
  text-decoration: underline;
}

.contactos svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
}

.redes {
  gap: 16px;
}

.redes span {
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  color: #f4f5f7;
}

.redes svg {
  width: 19px;
  height: 19px;
  fill: currentColor;
}

.redes svg rect,
.redes svg circle:not(.punto) {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}

.redes svg .punto {
  fill: currentColor;
}

@media (max-width: 700px) {
  .footer {
    padding: 26px 20px 16px;
    border-radius: 24px 24px 0 0;
  }

  .footer-principal {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
    padding: 0 0 20px;
  }

  .marca-texto {
    font-size: 38px;
  }

  .footer-inferior {
    flex-direction: column;
    align-items: flex-start;
  }

  .contactos {
    flex-wrap: wrap;
    gap: 12px 18px;
  }

  .redes {
    align-self: flex-end;
  }
}
</style>
