import { cursos, type Curso } from '../data/cursos'

export type FiltroCurso = 'todos' | 'destacados'

export const idsDestacados = [1, 4, 5, 8, 9]

export const getCursoById = (id: number): Curso | undefined =>
  cursos.find((curso) => curso.id === id)

export const getCursosByFiltro = (filtro: FiltroCurso): Curso[] =>
  filtro === 'destacados'
    ? cursos.filter((curso) => idsDestacados.includes(curso.id))
    : cursos

const normalizarTexto = (texto: string) =>
  texto
    .trim()
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export const getCursosByNombre = (nombre: string): Curso[] => {
  const termino = normalizarTexto(nombre)

  return cursos.filter((curso) => normalizarTexto(curso.nombre).includes(termino))
}
