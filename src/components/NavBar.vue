<template>
  <header class="barra-superior">
    <nav class="navbar" aria-label="Navegación principal">
      <RouterLink to="/" class="logo" aria-label="UADY, ir al inicio">
        <span>UADY</span>
      </RouterLink>

      <div class="enlaces">
        <RouterLink to="/Inicio" class="nav-link inicio">Inicio</RouterLink>
        <RouterLink to="/cursos" class="nav-link">Cursos</RouterLink>
        <RouterLink to="/inscripciones" class="nav-link">Inscribirme</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
:global(body) {
  padding-top: 62px;
}

.barra-superior {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  height: 62px;
  border-bottom: 2px solid var(--brand-gold);
  border-radius: 0 0 38px 38px;
  background: var(--brand-purple);
  color: #f4f5f7;
  box-shadow: 0 2px 8px rgb(20 8 26 / 22%);
}

.navbar {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 16px;
  overflow-x: auto;
  padding: 0 12px;
  box-sizing: border-box;
  scrollbar-width: none;
}

.navbar::-webkit-scrollbar {
  display: none;
}

.logo {
  flex: 0 0 auto;
  color: #f4f5f7;
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
}

.enlaces {
  display: flex;
  flex: 0 0 auto;
  height: 100%;
  align-items: center;
  gap: 8px;
}

.nav-link {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: 0;
  border-radius: 22px;
  background: transparent;
  color: #f4f5f7;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.nav-link:hover,
.nav-link:focus-visible {
  background: rgb(180 149 89 / 20%);
}

.inicio.router-link-active {
  background: var(--brand-gold);
  color: var(--brand-purple-deep);
}
</style>
