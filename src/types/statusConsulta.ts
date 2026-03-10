/**
 * Representa o status atual de uma consulta médica no sistema
 * 
 * Este tipo define todos os estados possíveis pelos quais uma consulta
 * pode passar durante seu ciclo de vida no sistema.
 * 
 * Ciclo de vida típico de uma consulta:
 * 1. agendada → confirmada → realizada (fluxo normal)
 * 2. agendada → cancelada (cancelamento antes da confirmação)
 * 3. confirmada → cancelada (cancelamento após confirmação)
 * 4. realizada (estado final, não permite mais alterações)
 * 
 * @example
 * // Exemplo de uso em uma consulta
 * const consulta: Consulta = {
 *   id: 1,
 *   // ... outros campos
 *   status: "agendada"
 * };
 * 
 * @example
 * // Exemplo em uma função de atualização
 * function atualizarStatus(consulta: Consulta, novoStatus: StatusConsulta) {
 *   consulta.status = novoStatus;
 * }
 * 
 * @example
 * // Exemplo em renderização condicional
 * if (consulta.status === "realizada") {
 *   console.log("Consulta já foi realizada");
 * }
 */
export type StatusConsulta =
  | "agendada"    // Consulta criada, aguardando confirmação
  | "confirmada"  // Consulta confirmada pelo paciente/sistema
  | "cancelada"   // Consulta cancelada (não será realizada)
  | "realizada";  // Consulta já ocorreu (status final)