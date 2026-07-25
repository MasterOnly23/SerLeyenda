# Reglas para agentes de Ser Leyenda

Este archivo aplica a todo el repositorio. Un `AGENTS.md` ubicado en una subcarpeta puede añadir reglas más específicas, pero no contradecir estas reglas sin una decisión arquitectónica aceptada.

## 1. Lectura obligatoria

Antes de analizar o modificar código:

1. lee este archivo completo;
2. lee [`docs/README.md`](docs/README.md);
3. consulta [`docs/roadmap.md`](docs/roadmap.md) para conocer el MVP activo;
4. consulta [`docs/backlog.md`](docs/backlog.md) para confirmar el paquete de trabajo;
5. lee [`docs/architecture.md`](docs/architecture.md), [`docs/decisions.md`](docs/decisions.md) y los archivos relevantes de `docs/context/`;
6. inspecciona el código y las pruebas actuales del área afectada.

`docs/` es documentación local excluida de Git. Si no está disponible en el workspace, no inventes su contenido ni amplíes el alcance: solicita al responsable del proyecto el contexto o paquete de trabajo faltante.

No uses la visión completa de `docs/product.md` para ampliar por tu cuenta el alcance del MVP o paquete activo.

## 2. Autoridad y arquitectura

- El arquitecto responsable conserva la coherencia global y acepta las decisiones transversales.
- Un agente puede implementar dentro de contratos y decisiones ya aceptados.
- Antes de cambiar límites de módulos, stack, contratos públicos, máquina de estados, versionado, modelo de autenticación o política de datos, crea una propuesta en `docs/decisions.md` y solicita revisión arquitectónica.
- El backend es la autoridad del estado y las reglas del juego.
- El motor de simulación debe permanecer independiente de Django, ORM, HTTP y UI.
- No agregues Redis, Celery, WebSockets, microservicios o librerías globales de estado sin una necesidad demostrada y una decisión aceptada.

## 3. Documentación obligatoria

Todo paquete implementado debe actualizar la documentación en el mismo cambio.

Documenta siempre cuando cambie alguno de estos elementos:

- comportamiento visible o regla de negocio;
- endpoint, payload, permiso o código de error;
- modelo, constraint, migración o relación relevante;
- variable de entorno, dependencia o servicio;
- comando de instalación, operación, importación o despliegue;
- límite de módulo o flujo entre frontend y backend;
- algoritmo, versión o explicación de simulación;
- catálogo, procedencia o política de exposición de datos;
- decisión técnica con alternativas o consecuencias;
- riesgo, limitación o deuda aceptada.

No es obligatorio crear una entrada por:

- formato, renombre interno o refactor mecánico sin cambio de contrato;
- archivo generado automáticamente;
- prueba adicional que no cambie comportamiento;
- corrección ortográfica sin impacto de producto.

Esos cambios sí deben documentarse si alteran arquitectura, operación, contratos o convenciones.

## 4. Qué documento actualizar

| Tipo de cambio | Documento |
| --- | --- |
| Visión, alcance completo o regla de producto | `docs/product.md` |
| Arquitectura actualmente vigente | `docs/architecture.md` |
| Decisión importante y su razonamiento | `docs/decisions.md` |
| Orden futuro de entregas | `docs/roadmap.md` |
| Trabajo ejecutable, bloqueado o terminado | `docs/backlog.md` |
| Resumen cronológico de cambios terminados | `docs/changelog.md` |
| Convenciones de código y colaboración | `docs/conventions.md` |
| Estado y contratos de un dominio | `docs/context/<dominio>.md` |

No copies la misma explicación en varios documentos. Actualiza la fuente canónica y enlázala desde los demás.

## 5. Protocolo antes y después de implementar

Antes:

- confirma que existe un paquete en `docs/backlog.md`;
- identifica objetivo, exclusiones, contrato, permisos, invariantes y verificaciones;
- si falta una decisión transversal, no la inventes dentro del código.

Después:

1. actualiza el archivo de contexto del dominio;
2. actualiza arquitectura o decisiones si corresponde;
3. mueve el estado del paquete en `docs/backlog.md`;
4. agrega una entrada breve en `docs/changelog.md`;
5. actualiza roadmap o producto únicamente si cambió su alcance;
6. ejecuta las verificaciones aplicables;
7. informa exactamente qué se comprobó y qué no.

Un paquete no está terminado si su documentación obligatoria quedó desactualizada.

## 6. Reglas de contenido documental

- Describe el estado real, no una intención presentada como implementada.
- Distingue `Propuesto`, `Aceptado`, `Implementado`, `Bloqueado` y `Obsoleto`.
- Incluye fecha y paquete de trabajo en decisiones y changelog.
- Registra comandos ejecutados solo si realmente se ejecutaron.
- Conserva enlaces a archivos y contratos concretos.
- No guardes secretos, tokens, credenciales, datos personales ni datasets reales dentro de la documentación.
- Los datos reales locales se rigen por `docs/context/catalog.md`.

## 7. Implementación y verificación

- Mantén cambios pequeños y acotados al paquete activo.
- Trabaja sobre `develop` o sobre una rama creada desde `develop`.
- `main` representa la línea estable y solo recibe pull requests cuyo origen sea `develop`.
- Nunca hagas push directo a `main`.
- Las ramas de trabajo futuras se integran primero en `develop`; no apuntan directamente a `main`.
- Después de una promoción a `main`, vuelve a dejar el checkout local en `develop`.
- Conserva activo `core.hooksPath=.githooks`; ejecuta `scripts/setup-git-hooks.ps1` después de clonar.
- No reformatees ni refactorices áreas no relacionadas.
- No inventes endpoints desde el frontend.
- Mantén views y serializers delgados; las reglas viven en dominio.
- Usa queries de solo lectura para consultas reutilizables.
- Conserva permisos de propiedad explícitos.
- Verifica con PostgreSQL las transacciones, locks, constraints e idempotencia.
- Actualiza OpenAPI, tipos frontend y pruebas cuando cambia un contrato.
- Ejecuta typecheck y build cuando el frontend resulte afectado.
- Recorre el flujo mobile-first cuando exista impacto visible.
- No hagas commits, merges, despliegues ni publicaciones salvo solicitud explícita.

## 8. Datos reales

- `DATA_MODE=real_local` es únicamente para desarrollo local autorizado.
- Clubes, jugadores y marcas se referencian mediante IDs internos estables.
- Los nombres o assets externos no entran en reglas de negocio.
- No copies datasets, logos, fotografías, kits o marcas a builds públicos.
- Toda importación registra versión, fuente, fecha y estado de licencia.
- Si un cambio puede exponer datos reales fuera del entorno permitido, detén el trabajo y solicita revisión.
