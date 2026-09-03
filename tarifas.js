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
    info: "Consiste en descargar el contenedor bajando los respectivos pallets con el clark, dejando la mercadería lista para el ingreso",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación contenedor 40 pies palletizado",
    precio: 232280,
    info: "",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación contenedor 20 pies a granel",
    precio: 174960,
    info: "Consiste en descargar el contenedor bajando los respectivos bultos/cajas con maquinas o manualmente, dejando la mercadería lista para el ingreso.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación contenedor 40 pies a granel",
    precio: 349920,
    info: "",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación x caja",
    precio: 500,
    info: "Consiste en descargar las unidades de cajas/bultos que lleguen en el transporte, se realiza con maquinarias o manualmente, dejando la mercadería lista para el ingreso.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Desconsolidación x pallet",
    precio: 13000,
    info: "Consiste en descargar las unidades de pallets que lleguen en el transporte, se realiza con clark, dejando la mercadería lista para el ingreso.",
    categoria: "Recepción y desconsolidación",
  },
  {
    nombre: "Pallet IN",
    precio: 3000,
    info: "Consiste en realizar el ingreso físico del pallet a la ubicación del deposito donde quedara almacenado y realizar el ingreso administrativo del mismo en el sistema de inventario/gestión de stock",
    categoria: "Ingreso a depósito",
  },
  {
    nombre: "Caja h/25 kg IN",
    precio: 500,
    info: "Consiste en realizar el ingreso físico de la caja/bulto a la ubicación del deposito donde quedara almacenado y realizar el ingreso administrativo de la misma en el sistema de inventario/gestión de stock",
    categoria: "Ingreso a depósito",
  },
  {
    nombre: "Almacenamiento mensual x mt3",
    precio: 15000,
    info: "",
    categoria: "Almacenamiento",
  },
  {
    nombre: "Almacenamiento mensual x posición",
    precio: 19000,
    info: "",
    categoria: "Almacenamiento",
  },
  {
    nombre: "Preparación de pedidos (Picking) x mt3",
    precio: 7000,
    info: "",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Preparación de pedidos (Picking) x pallet",
    precio: 8000,
    info: "",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Preparación de pedidos (Picking) x caja",
    precio: 1500,
    info: "",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Preparación de pedidos (Picking) x unidad",
    precio: 400,
    info: "Consiste en la apertura de cajas y selección de los productos individuales que van a conformar parte del pedido a despachar",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Packing (Caja + Insumos)",
    precio: 1500,
    info: "Consiste en el empaquetado del pedido incluyendo la caja con los insumos necesarios (etiquetas, film, embalado, etc)",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Packing (Solo Insumos)",
    precio: 400,
    info: "Consiste en la preparación del pedido pero sin incluir la caja ya que se utiliza el bulto que viene del proveedor. Solo se añaden los insumos necesarios (etiquetas, film, embalado, etc)",
    categoria: "Preparación y despacho",
  },
  {
    nombre: "Film Stretch x pallet",
    precio: 7000,
    info: "",
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
