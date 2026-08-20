/* ============================================================
   TARIFARIO IRON LOG — fuente unica de precios

   Este archivo lo leen las dos paginas:
     - iron-log-site/index.html   (tabla publica de precios)
     - interno/cotizacion.html    (generador de cotizaciones)

   Para agregar, sacar o cambiar un precio, editalo SOLO aca.
   Los cambios se reflejan en ambos lados automaticamente.

   Campos de cada item:
     nombre : texto que se muestra (obligatorio)
     precio : numero entero, sin puntos ni signo $ (obligatorio)
     info   : texto del globo de ayuda (opcional, dejar "" si no lleva)
   ============================================================ */

const TARIFAS = [
  {
    nombre: "Servicio portuario (Retiro de contenedores en Puerto Buenos Aires)",
    precio: 510000,
    info: "",
  },
  {
    nombre: "Desconsolidación contenedor 20 pies palletizado",
    precio: 180000,
    info: "Consiste en descargar el contenedor bajando los respectivos pallets con el clark, dejando la mercadería lista para el ingreso",
  },
  {
    nombre: "Desconsolidación contenedor 40 pies palletizado",
    precio: 360000,
    info: "",
  },
  {
    nombre: "Desconsolidación contenedor 20 pies a granel",
    precio: 270000,
    info: "Consiste en descargar el contenedor bajando los respectivos bultos/cajas con maquinas o manualmente, dejando la mercadería lista para el ingreso.",
  },
  {
    nombre: "Desconsolidación contenedor 40 pies a granel",
    precio: 540000,
    info: "",
  },
  {
    nombre: "Desconsolidación x caja",
    precio: 500,
    info: "Consiste en descargar las unidades de cajas/bultos que lleguen en el transporte, se realiza con maquinarias o manualmente, dejando la mercadería lista para el ingreso.",
  },
  {
    nombre: "Desconsolidación x pallet",
    precio: 12000,
    info: "Consiste en descargar las unidades de pallets que lleguen en el transporte, se realiza con clark, dejando la mercadería lista para el ingreso.",
  },
  {
    nombre: "Pallet IN",
    precio: 8000,
    info: "Consiste en realizar el ingreso físico del pallet a la ubicación del deposito donde quedara almacenado y realizar el ingreso administrativo del mismo en el sistema de inventario/gestión de stock",
  },
  {
    nombre: "Caja h/25 kg IN",
    precio: 1500,
    info: "Consiste en realizar el ingreso físico de la caja/bulto a la ubicación del deposito donde quedara almacenado y realizar el ingreso administrativo de la misma en el sistema de inventario/gestión de stock",
  },
  {
    nombre: "Almacenamiento mensual x mt3",
    precio: 25000,
    info: "",
  },
  {
    nombre: "Almacenamiento mensual x posición",
    precio: 100,
    info: "",
  },
  {
    nombre: "Preparación de pedidos (Picking) x mt3",
    precio: 7000,
    info: "",
  },
  {
    nombre: "Preparación de pedidos (Picking) x pallet",
    precio: 100,
    info: "",
  },
  {
    nombre: "Preparación de pedidos (Picking) x caja",
    precio: 100,
    info: "",
  },
  {
    nombre: "Preparación de pedidos (Picking) x unidad",
    precio: 500,
    info: "Consiste en la apertura de cajas y selección de los productos individuales que van a conformar parte del pedido a despachar",
  },
  {
    nombre: "Packing",
    precio: 1600,
    info: "Consiste en el empaquetado, embalaje y etiqueta o rotulación que lleve la caja/pallet, dejando la mercadería lista para el flete de última milla",
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
