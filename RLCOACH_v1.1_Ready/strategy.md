# RLCOACH v1.1 Strategy & Roadap

## 1. Mapeo de Servicios & Sinergia (Anti-Canibalización)

**Objetivo**: Convertir la web en un ecosistema recurrente que nutra el servicio High-Ticket de Fiverr.

| Característica | **Fiverr Service (High Touch)** | **Web Platform (Low Touch / Scalable)** |
| :--- | :--- | :--- |
| **Modelo** | Transaccional (Pago único) | Suscripción (Recurrente MRR) |
| **Precio** | $29 - $100+ USD / Sesión | $0 - $49 USD / Mes |
| **Entregable** | Análisis 1-on-1 en vivo (Discord) | Tracker Automático, Comunidad, AI Analysis |
| **Público** | Jugadores estancados buscando solución inmediata | Jugadores comprometidos con mejora continua |
| **Rol** | "Cirujano" (Arregla problema específico) | "Gimnasio" (Lugar de entrenamiento diario) |

### 🔄 El Flywheel de Sinergia
1.  **Fiverr -> Web**: Al terminar una sesión en Fiverr, el cliente recibe un cupón "1 MES PRO GRATIS" ($19 value). Esto asegura que el cliente siga en el ecosistema y trackee su progreso post-coaching.
2.  **Web -> Fiverr**: Los usuarios gratuitos del Tracker ven alertas: *"Tu consistencia ha bajado. Agenda una sesión con un Pro para corregirlo."* (Link directo a Fiverr).

## 2. Unit Economics & Pricing

### Fiverr (Active Income)
- **Precio Base**: $29
- **Fiverr Fee**: -20%
- **Neto**: ~$23
- **Tiempo**: 60 min
- **Hourly Rate**: $23/hr

### Web (Passive Income)
- **Pro**: $19/mes
- **Elite**: $49/mes
- **Coste Marginal**: ~$0 (Server costs despreciables con Vercel/Supabase tier free incial)
- **LTV Esperado**: 6 meses ($114) vs Fiverr Single Session ($23).
- **Target**: Convertir al 10% de clientes de Fiverr en suscriptores recurrentes.

### Estructura de Precios Unificada
1.  **Starter ($0/mes)**:
    - Tracker Básico (últimas 10 sesiones)
    - Acceso a Comunidad (Discord General)
2.  **Pro ($19/mes)**:
    - Tracker Ilimitado
    - Replay Analysis AI (Límite 5/mes)
    - Descuento 20% en Coaching Fiverr
3.  **Elite ($49/mes)**:
    - Prioridad en Cola Fiverr
    - Acceso canal Discord VIP (Chat directo con Coaches)
    - Group Coaching mensual

## 3. Growth Tactics (30 Días)

- **TikTok/Shorts**: "3 Errores que te mantienen en Diamante" -> Link a Web Tracker Gratuito.
- **Discord Funnel**: Bot que felicita subidas de rango y sugiere análisis.
- **Fiverr Auto-Reply**: Mensaje automático post-compra con link a la Web para "preparar la sesión" (data collection).

## 4. Tech Roadmap (MVP v1.1)
- **Semana 1**: Landing Page optimizada, Integración Auth0, Setup Base de Datos (Supabase/Firebase/LocalJson).
- **Semana 2**: Stripe Checkout, Gating de contenido, Deploy final.
