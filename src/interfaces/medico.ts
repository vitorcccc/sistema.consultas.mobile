import { Especialidade } from "../types/especialidade";

/**
 * Representa um médico no sistema de consultas médicas
 * 
 * Esta interface define a estrutura de dados para armazenar informações
 * de um médico, incluindo seus dados profissionais e status no sistema.
 * 
 * Características:
 * - Relacionamento direto com Especialidade (composição)
 * - CRM como identificador profissional único
 * - Status ativo/inativo para controle de disponibilidade
 * - Estrutura imutável em tempo de execução (interface)
 * 
 * Fluxo típico de um médico no sistema:
 * 1. Cadastro inicial (ativo = true)
 * 2. Período de atendimento (ativo = true)
 * 3. Afastamento temporário (ativo = false)
 * 4. Desligamento (ativo = false)
 * 
 * @example
 * // Exemplo básico de criação de um médico
 * const medico: Medico = {
 *   id: 1,
 *   nome: "Dr. Roberto Silva",
 *   crm: "CRM12345",
 *   especialidade: {
 *     id: 1,
 *     nome: "Cardiologia",
 *     descricao: "Cuidados com o coração"
 *   },
 *   ativo: true
 * };
 * 
 * @example
 * // Exemplo com médico inativo (afastado)
 * const medicoInativo: Medico = {
 *   id: 2,
 *   nome: "Dra. Maria Santos",
 *   crm: "CRM67890",
 *   especialidade: {
 *     id: 2,
 *     nome: "Dermatologia"
 *   },
 *   ativo: false
 * };
 */
export interface Medico {
  /** 
   * Identificador único do médico no sistema
   * Gerado automaticamente pelo banco de dados
   * Utilizado como chave primária em relacionamentos
   */
  id: number;
  
  /** 
   * Nome completo do médico
   * Deve incluir título profissional (Dr./Dra.) e nome completo
   * @example "Dr. João Carlos Oliveira"
   * @example "Dra. Ana Beatriz Santos"
   */
  nome: string;
  
  /** 
   * Registro no Conselho Regional de Medicina
   * Identificador profissional único por estado
   * Formato: CRM + número + UF (opcional)
   * @example "CRM12345"
   * @example "CRM12345-SP"
   */
  crm: string;
  
  /** 
   * Especialidade médica do profissional
   * Relacionamento de composição com o tipo Especialidade
   * Define a área de atuação do médico
   */
  especialidade: Especialidade;
  
  /** 
   * Status de atividade do médico no sistema
   * - true: Médico ativo, disponível para consultas
   * - false: Médico inativo, temporariamente ou permanentemente indisponível
   * 
   * Utilizado para filtrar médicos disponíveis em agendamentos
   */
  ativo: boolean;
}