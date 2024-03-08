/**
 * Function utilitaire qui gère l'état de mes classes en active ou pas
 * @param  {boolean} condition
 * @param  {string} className
 * @returns {*|string}
 */
export function activeClassIf(condition, className) {
   if (!condition) {
       return className;
   }
   if (!className){
       return 'active';
   }
   return className + ' active  ' ;
}