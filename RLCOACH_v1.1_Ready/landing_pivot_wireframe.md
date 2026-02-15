# RLCOACH Service Pivot - Wireframe & Copy

## 1. Hero Section
**Layout**: Large background image/video (Rocket League gameplay), centralized text, high contrast.
**Headline**: Domina el Campo. Alcanza Grand Champion.
**Subheadline**: Coaching 1-a-1 personalizado con ex-jugadores Profesionales (1600+ MMR). Jugamos contigo, analizamos tus errores y te llevamos al siguiente nivel.
**CTA Primary (Button)**: Reserva tu Sesión en Fiverr ($29) -> `#FIVERR_LINK`
**Visual**: Imagen de dos coches 'Octane' volando en formación o stats de subida de rango.

## 2. Conoce a tus Coaches (Trust & Authority)
**Layout**: Dos tarjetas de perfil lado a lado (o grid).
**Coach A**:
- **Nombre**: [Nombre Coach 1]
- **Stats**: GC2 Peak (1650 MMR) | 4000+ Horas | 9 Años Exp
- **Estilo**: "Analítico y estratégico. Te enseño a pensar antes de volar."
**Coach B**:
- **Nombre**: [Nombre Coach 2]
- **Stats**: GC2 Peak (1630 MMR) | 3800+ Horas | Coach Táctico
- **Estilo**: "Mecánicas y Rotación. Pulimos tu control del coche y del balón."

## 3. Cómo Funciona (The Process)
**Layout**: 4 Pasos con iconos simples (Calendario, Mando, Chat, Trofeo).
1. **Reserva**: Elige tu pack en Fiverr y cuéntanos tu rango actual.
2. **Agenda**: Coordinamos horario (flexible) y nos unimos a Discord.
3. **Juega**: Sesión de 1 hora. Jugamos 2v2 o analizamos replay en vivo.
4. **Mejora**: Recibe notas personalizadas y un plan de entrenamiento.
**Policy Note**: *Cancelaciones libres hasta 6h antes. Esperamos 10 min máx por sesión (No-show policy).*

## 4. Qué vas a Mejorar (Benefits)
**Layout**: Checklist o Grid de 3x2.
- 🧠 **Game Sense**: Cuándo retar y cuándo hacer shadow defense.
- 🔄 **Rotaciones**: Deja de cortar a tus compañeros. Fluye en el campo.
- ⚡ **Mecánicas**: Fast aerials, wall-drags y recuperación.
- 🛡️ **Defensa**: Posicionamiento en backboard y paradas difíciles.

## 5. Planes de Coaching (No Subscriptions)
**Layout**: Tarjetas de "Producto" (No SaaS tiers).
**Opción A: Single Session**
- **Precio**: $29 / sesión
- **Incluye**: 60 min coaching, Feedback en vivo, Notas post-sesión.
- **CTA**: Contratar en Fiverr

**Opción B: Rank Up Bundle (3 Sesiones)**
- **Precio**: Consultar en Fiverr (aprox $80)
- **Incluye**: Plan de 3 semanas, Análisis de progreso, Soporte por chat.
- **CTA**: Ver Packs

## 6. Testimonios (Social Proof)
*Placeholders para Fiverr Reviews*
- "Increíble, subí de Diamante 2 a Champ 1 en dos semanas." - ⭐⭐⭐⭐⭐
- "Explican muy bien los errores que no ves por ti mismo." - ⭐⭐⭐⭐⭐

## 7. FAQ (Service Specific)
- **¿Qué rango necesito?**: "Desde Bronce hasta Champ 3. Nos adaptamos a ti."
- **¿Es con micrófono?**: "Sí, usamos Discord para comunicación en tiempo real."
- **¿Horarios?**: "Coordinamos por chat privado una vez hecha la reserva. Base horaria: [Tu Zona]."
- **¿Reembolsos?**: "Si cancelas con 6h de antelación, sin problema."

---

## Technical Notes for Dev
- **Navigation**:
    - Remove "Pricing" (SaaS). Change to "Coaching" (Anchor to #coaching-plans).
    - Remove "Tracker" prominence (Move to Footer or "Free Tools").
    - "Login/Profile" can stay for existing users but deemphasize.
- **Internal Links**: All "Book Now" buttons must go to `#FIVERR_LINK` (External).
