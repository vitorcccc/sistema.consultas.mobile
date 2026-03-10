/**
 * Representa uma especialidade médica no sistema
 * 
 * Este tipo define a estrutura de dados para categorizar os médicos
 * de acordo com suas áreas de atuação (Cardiologia, Dermatologia, etc.).
 * 
 * Características:
 * - Identificador único para referência em relacionamentos
 * - Nome obrigatório da especialidade
 * - Descrição opcional para detalhamento da área
 * - Utilizado principalmente pelo tipo Médico
 * 
 * @example
 * // Exemplo básico de criação de uma especialidade
 * const cardiologia: Especialidade = {
 *   id: 1,
 *   nome: "Cardiologia"
 * };
 * 
 * @example
 * // Exemplo com descrição completa
 * const dermatologia: Especialidade = {
 *   id: 2,
 *   nome: "Dermatologia",
 *   descricao: "Especialidade médica que se ocupa do diagnóstico e tratamento clínico-cirúrgico da pele"
 * };
 */
export type Especialidade = {
  /** 
   * Identificador único da especialidade no sistema
   * Utilizado como chave estrangeira em médicos e consultas
   */
  id: number;
  
  /** 
   * Nome oficial da especialidade médica
   * Deve seguir a nomenclatura padrão do CFM (Conselho Federal de Medicina)
   * @example "Cardiologia", "Dermatologia", "Pediatria"
   */
  nome: string;
  
  /** 
   * Descrição detalhada da especialidade (opcional)
   * Explica o escopo de atuação da especialidade
   * @example "Área da medicina que cuida da saúde do sistema cardiovascular"
   */
  descricao?: string;
};