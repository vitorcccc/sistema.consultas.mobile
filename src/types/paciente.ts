/**
 * Representa um paciente no sistema de consultas médicas
 * 
 * Este tipo define a estrutura de dados para armazenar informações
 * de um paciente, incluindo dados pessoais e de contato.
 * 
 * Características:
 * - Todos os campos obrigatórios exceto telefone (opcional)
 * - CPF armazenado como string para preservar formatação
 * - Estrutura imutável em tempo de execução (type)
 * 
 * @example
 * // Exemplo básico de criação de um paciente
 * const paciente: Paciente = {
 *   id: 1,
 *   nome: "Maria Oliveira",
 *   cpf: "123.456.789-00",
 *   email: "maria@email.com"
 * };
 * 
 * @example
 * // Exemplo com telefone (campo opcional)
 * const pacienteCompleto: Paciente = {
 *   id: 2,
 *   nome: "João Santos",
 *   cpf: "987.654.321-00",
 *   email: "joao@email.com",
 *   telefone: "(11) 91234-5678"
 * };
 */
export type Paciente = {
  /** 
   * Identificador único do paciente no sistema
   * Gerado automaticamente pelo banco de dados
   */
  id: number;
  
  /** 
   * Nome completo do paciente
   * Deve conter pelo menos nome e sobrenome
   * @example "Ana Paula Silva"
   */
  nome: string;
  
  /** 
   * CPF do paciente
   * Pode ser armazenado com ou sem formatação
   * @example "123.456.789-00" ou "12345678900"
   */
  cpf: string;
  
  /** 
   * E-mail válido do paciente para contato
   * Utilizado para envio de confirmações e lembretes
   * @example "paciente@email.com"
   */
  email: string;
  
  /** 
   * Telefone para contato (opcional)
   * Pode ser fixo ou celular
   * @example "(11) 98765-4321" ou "11987654321"
   */
  telefone?: string;
};