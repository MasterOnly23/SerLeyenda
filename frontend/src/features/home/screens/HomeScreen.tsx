import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const foundations = [
  "React + TypeScript",
  "Django REST Framework",
  "PostgreSQL",
  "Docker Compose",
];

export function HomeScreen() {
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        minHeight: "100dvh",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={8} sx={{ p: { xs: 3, sm: 5 } }}>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography color="primary" fontWeight={800} variant="overline">
                Cimientos del proyecto
              </Typography>
              <Typography component="h1" variant="h3">
                Ser Leyenda
              </Typography>
              <Typography color="text.secondary">
                Construye la carrera de un futbolista dentro y fuera del campo.
              </Typography>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {foundations.map((foundation) => (
                <Chip key={foundation} label={foundation} variant="outlined" />
              ))}
            </Stack>

            <Typography color="text.secondary" variant="body2">
              La base técnica está lista para recibir el primer contrato de
              producto. Todavía no se implementaron reglas de carrera.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
