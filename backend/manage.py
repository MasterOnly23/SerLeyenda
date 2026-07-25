#!/usr/bin/env python
import os
import sys


def main() -> None:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Django no está disponible. Ejecuta el proyecto mediante Docker "
            "o instala las dependencias del backend."
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
