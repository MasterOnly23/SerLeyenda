# Ser Leyenda

Simulador mobile-first de carrera futbolística. El repositorio comienza como un monolito modular con React, Django REST Framework y PostgreSQL.

## Requisitos

- Docker Desktop con Docker Compose.
- Git.

Node y Python locales son opcionales: el entorno principal se ejecuta en Docker.

## Inicio rápido

```powershell
Copy-Item .env.example .env
.\scripts\setup-git-hooks.ps1
docker compose up --build
```

Servicios:

- Frontend: <http://localhost:5173>
- Backend: <http://localhost:8000>
- Salud: <http://localhost:8000/api/health/>
- OpenAPI: <http://localhost:8000/api/schema/>
- Swagger UI: <http://localhost:8000/api/docs/>
- PostgreSQL desde el host: `localhost:5433`

Detener:

```powershell
docker compose down
```

Los datos de PostgreSQL se conservan en un volumen. `docker compose down -v` los elimina y no debe usarse como comando ordinario.

## Verificación

```powershell
docker compose exec backend python manage.py check
docker compose exec backend python manage.py test
docker compose exec backend python manage.py spectacular --validate --file /tmp/schema.yml
docker compose exec frontend npm run typecheck
docker compose exec frontend npm run build
```

## Estructura

```text
backend/      Django, DRF y OpenAPI
frontend/     React, Vite, TypeScript y Material UI
data/         catálogos ficticios y espacio local no publicable
docs/         documentación local no publicada
AGENTS.md     reglas obligatorias para agentes
```

No se crean apps o features vacías. Cada módulo aparece cuando comienza su primer paquete real.

## Configuración

`.env.example` contiene valores seguros únicamente para desarrollo. La aplicación usa:

- `APP_ENV`
- `DATABASE_URL`
- `ALLOWED_HOSTS`
- `CSRF_TRUSTED_ORIGINS`
- `DATA_MODE`
- `CATALOG_PATH`
- `ALLOW_UNLICENSED_DATA`
- `RULES_VERSION`

`DATA_MODE=real_local` exige `APP_ENV=local` y `ALLOW_UNLICENSED_DATA=1`. El contenido de `data/local_real/` está excluido de Git salvo su README.

## Documentación

Lee primero [AGENTS.md](AGENTS.md). La planificación detallada, los MVP y los contextos del proyecto viven localmente en `docs/` y están excluidos de Git.

## Flujo Git

- `develop` es la rama predeterminada de desarrollo.
- Las ramas futuras se integran primero en `develop`.
- `main` solo debe recibir pull requests desde `develop`.
- Un ruleset remoto exige pull request, impide borrar o reescribir `main` y requiere el check `Source branch is develop`.
- El hook versionado bloquea pushes directos a `main` desde checkouts configurados.
