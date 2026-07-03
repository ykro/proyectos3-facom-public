package com.example.portafoliocreativo.theme

import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext

// Esquema oscuro con la paleta vino (tonos claros de la marca sobre fondo oscuro).
private val DarkColorScheme =
  darkColorScheme(
    primary = VinoClaro,
    secondary = TerracotaClaro,
    tertiary = MostazaClaro,
  )

// Esquema claro: la identidad "vino" de Bitacora Visual.
private val LightColorScheme =
  lightColorScheme(
    primary = Vino,
    secondary = Terracota,
    tertiary = Mostaza,
    background = Crema,
    surface = Crema,
    onPrimary = Crema,
    onSecondary = Crema,
    onTertiary = Texto,
    onBackground = Texto,
    onSurface = Texto,
  )

@Composable
fun PortafolioCreativoTheme(
  darkTheme: Boolean = isSystemInDarkTheme(),
  // Desactivado por defecto para que se vea la paleta "vino" de la marca.
  // (El color dinamico de Android 12+ tomaria los colores del fondo del sistema.)
  dynamicColor: Boolean = false,
  content: @Composable () -> Unit,
) {
  val colorScheme =
    when {
      dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
        val context = LocalContext.current
        if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
      }
      darkTheme -> DarkColorScheme
      else -> LightColorScheme
    }

  MaterialTheme(colorScheme = colorScheme, typography = Typography, content = content)
}
