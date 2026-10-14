/* ============================================================
   TARIFARIO IRON LOG — fuente unica de precios

   Este archivo lo leen las dos paginas:
     - iron-log-site/index.html   (tabla publica de precios)
     - interno/cotizacion.html    (generador de cotizaciones)

   Para agregar, sacar o cambiar un precio, editalo SOLO aca.
   Los cambios se reflejan en ambos lados automaticamente.

   Campos de cada item:
     nombre    : texto que se muestra (obligatorio)
     precio    : numero entero, sin puntos ni signo $ (obligatorio)
     info      : texto del globo de ayuda (opcional, dejar "" si no lleva)
     categoria : agrupa el item en la tabla publica (obligatorio).
                 Usar uno de estos textos:
                 "Retiro contenedores" | "Recepción y desconsolidación" |
                 "Ingreso a depósito" | "Almacenamiento" |
                 "Preparación y despacho"
                 Las categorias se muestran en la tabla en el mismo orden
                 en que aparecen los items en la lista de abajo.
   ============================================================ */

const TARIFAS = [
  {
    nombre: "Servicio portuario (Retiro de contenedores en Puerto Buenos Aires)",
    precio: 510000,
    info: "",
    categoria: "Retiro contenedores",
  },
  {
    nombre: "Desconsolidación contenedor 20 pies palletizado",
    precio: 116640,
    info: "Descarga de mercadería con autoelevador.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación contenedor 40 pies palletizado",
    precio: 232280,
    info: "Descarga de mercadería con autoelevador.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación contenedor 20 pies a granel",
    precio: 174960,
    info: "Descarga de mercadería suelta, sin palletizar.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación contenedor 40 pies a granel",
    precio: 349920,
    info: "Descarga de mercadería suelta, sin palletizar.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación x caja",
    precio: 500,
    info: "Descarga a mano por caja.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación x pallet",
    precio: 13000,
    info: "Descarga con autoelevador por pallet.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Pallet IN",
    precio: 3000,
    info: "Clasificación, registro en sistema y ubicación en racks.",
    categoria: "Ingreso a depósito",
  },
  {
    nombre: "Caja h/25 kg IN",
    precio: 500,
    info: "Clasificación, registro en sistema y ubicación en racks.",
    categoria: "Ingreso a depósito",
  },
  {
    nombre: "Almacenamiento mensual x mt3",
    precio: 18000,
    info: "Guarda de mercadería según el volumen en metros cúbicos.",
    categoria: "Almacenamiento",
  },
  {
    nombre: "Almacenamiento mensual x posición",
    precio: 22000,
    info: "Guarda de un pallet en un espacio asignado del depósito.",
    categoria: "Almacenamiento",
  },
  {
    nombre: "Picking x mt3 (Preparación de pedidos)",
    precio: 7000,
    info: "Retiro de mercadería del stock y preparación para despacho.",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Picking x pallet (Preparación de pedidos)",
    precio: 8000,
    info: "Retiro de un pallet completo de su ubicación y preparación para despacho.",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Picking x caja (Preparación de pedidos)",
    precio: 1500,
    info: "Retiro de cajas completas del stock y agrupación según el pedido, listas para despachar.",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Picking x unidad (Preparación de pedidos)",
    precio: 400,
    info: "Selección de productos individuales dentro de una caja existente para armar un pedido.",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Packing (Caja + Insumos)",
    precio: 1500,
    info: "Embalaje del pedido, incluyendo la provisión de caja e insumos de embalaje.",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Packing (Solo Insumos)",
    precio: 250,
    info: "Embalaje del pedido con insumos, sin incluir la provisión de caja.",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Film Stretch x pallet",
    precio: 7000,
    info: "Envoltura del pallet con film plástico para mantener la carga estable y segura.",
    categoria: "Preparación y despacho",
  },
];

/* Items que SOLO existen en el cotizador interno, no en la tabla publica.
   Van primero en el desplegable. Precio 0 = se carga a mano segun el destino. */
const TARIFAS_SOLO_COTIZADOR_INICIO = [
  { nombre: "Última milla — envío exclusivo (cargar precio del Cotizador)", precio: 0, info: "" },
  { nombre: "Última milla — envío compartido (cargar precio de Reparto_Programado)", precio: 0, info: "" },
];

/* Va ultimo en el desplegable del cotizador. */
const TARIFAS_SOLO_COTIZADOR_FINAL = [
  { nombre: "Personalizado", precio: 0, info: "" },
];
