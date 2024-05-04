# zustand
## State Management
### Why is important
MArkup: Html and css
Logic: lógica se refiere a la gestión y actualización del estado de una aplicación React. La lógica es esencial para reaccionar a los cambios en el estado y proporciona una base para el desarrollo de la aplicación.
Hace que las cosas sean simples
React to state updates
React to changes in state

### Que es Zustand?
Zustand es una biblioteca de gestión de estado minimalista para React que ofrece una API más simple en comparación con Redux.

### Aspectos destacados
* Zustand tiene muy poco código boilerplate(No hay necesidad de escribir mucho codigo para empezar, Patrones complejos) en comparación con Redux.
* No depende de un proveedor (No mucha logica de react)
* Es más rápido que el Context de React.(al permitir suscripciones selectivas al estado.)
* Utiliza la fusión de estados (State merging) de forma predeterminada y es extensible. i.e Esto {b:7} en vez de {...state, b:7} 
* Extendible por defect. (Agregar otros middleware para dar mas funcionalidad)
* No es demasiado opinativo (No specifica necesariamente que seguir,Decides como interactuar, la manera que trabajas con react.) y permite a los desarrolladores decidir cómo interactuar con el almacenamiento.
* facilita la gestión y actualización del estado de la aplicación sin necesidad de código adicional o patrones complejos.

## Context vs Zustand

<!-- #region drawnote -->
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewbox="36.04999923706055,33,340,375" style="height:375"><rect x="46.05000000000001" y="43" fill="none" stroke="#6190e8" stroke-width="2" width="191" height="88" rx="10" ry="10" d="M 78.05 65 a 10 10 0 0 1 10 -10 h 171 a 10 10 0 0 1 10 10 v 68 a 10 10 0 0 1 -10 10 h -171 a 10 10 0 0 1 -10 -10 Z"></rect><rect x="157.05" y="96" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><text font-family="inherit" font-size="14" fill="#6190e8" x="104.05" y="87">Context</text><rect x="124.05" y="84" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="88.05" y="57" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="222.05" y="161" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="134.05" y="84" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><text font-family="inherit" font-size="14" fill="#6190e8" x="263.05" y="73">valueA</text><text font-family="inherit" font-size="14" fill="#6190e8" x="265.05" y="96">valueB</text><text font-family="inherit" font-size="14" fill="#6190e8" x="265.05" y="108">...</text><rect x="270.05" y="106" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="254.05" y="94" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1" width="112" height="82"></rect><rect x="366.05" y="176" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="321.05" y="162" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="271.05" y="287" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="52.05" y="196" fill="none" stroke="#f188ad" stroke-width="2" width="184" height="92" rx="10" ry="10"></rect><rect x="236.05" y="288" fill="none" stroke="#f188ad" stroke-width="2" d="undefined"></rect><text font-family="inherit" font-size="16" fill="#f188ad" x="88.05" y="233">Component</text><rect x="110.05" y="232" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="135.05" y="234" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1" width="2" height="5"></rect><rect x="135.05" y="234" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1" width="34" height="26"></rect><rect x="169.05" y="260" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="148.05" y="302" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="99.05" y="260" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1" width="14" height="23"></rect><rect x="99.05" y="260" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1" width="62.000000000000014" height="77"></rect><rect x="161.05" y="337" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="283.05" y="342" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="164.05" y="369" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="164.05" y="369" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="164.05" y="369" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="164.05" y="369" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1"></rect><rect x="175.05" y="385" fill="rgba(240, 240,240, 0.4)" stroke="#BBB" stroke-width="1" width="1" height="13"></rect><g id="selects"></g></svg>  
<!-- #endregion -->

