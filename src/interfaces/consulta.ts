import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { StatusConsulta } from "../types/statusConsulta";

/**
 * Representa uma consulta médica no sistema
 * 
 * Esta interface define a estrutura completa de uma consulta, integrando
 * todas as entidades principais do sistema (médico, paciente) e gerenciando
 * seu ciclo de vida através do status.
 * 
 * Características:
 * - Integra todas as entidades principais do sistema
 * - Gerencia ciclo de vida completo da consulta
 * - Inclui dados financeiros (valor) e observações
 * - Relacionamentos de composição com Medico e Paciente
 * 
 * Ciclo de vida completo de uma consulta:
 * 1. agendada → confirmada → realizada (fluxo normal)
 * 2. agendada → cancelada (cancelamento pré-confirmação)
 * 3. confirmada → cancelada (cancelamento pós-confirmação)
 * 4. realizada (estado final, histórico)
 * 
 * @example
 * // Exemplo de criação de uma nova consulta
 * const consulta: Consulta = {
 *   id: 1,
 *   medico: {
 *     id: 1,
 *     nome: "Dr. Roberto Silva",
 *     crm: "CRM12345",
 *     especialidade: {
 *       id: 1,
 *       nome: "Cardiologia"
 *     },
 *     ativo: true
 *   },
 *   paciente: {
 *     id: 1,
 *     nome: "Carlos Andrade",
 *     cpf: "123.456.789-00",
 *     email: "carlos@email.com",
 *     telefone: "(11) 98765-4321"
 *   },
 *   data: new Date(2026, 2, 10, 14, 30), // 10/03/2026 14:30
 *   valor: 350.00,
 *   status: "agendada",
 *   observacoes: "Consulta de rotina - paciente com histórico familiar"
 * };
 * 
 * @example
 * // Exemplo de consulta sem observações
 * const consultaSimples: Consulta = {
 *   id: 2,
 *   medico: medico1,
 *   paciente: paciente1,
 *   data: new Date(2026, 2, 15, 9, 0),
 *   valor: 300.00,
 *   status: "confirmada"
 *   // observacoes é opcional
 * };
 */
export interface Consulta {
  /** 
   * Identificador único da consulta no sistema
   * Gerado automaticamente pelo banco de dados
   * Utilizado para referências e buscas
   */
  id: number;
  
  /** 
   * Médico responsável pela consulta
   * Relacionamento de composição com a interface Medico
   * Contém todas as informações do profissional
   */
  medico: Medico;
  
  /** 
   * Paciente que será atendido
   * Relacionamento de composição com o tipo Paciente
   * Contém todos os dados do paciente
   */
  paciente: Paciente;
  
  /** 
   * Data e hora agendada para a consulta
   * Utiliza objeto Date do JavaScript para máxima flexibilidade
   * Inclui informação de data e horário
   * @example new Date(2026, 2, 10, 14, 30) // 10/03/2026 às 14:30
   */
  data: Date;
  
  /** 
   * Valor da consulta em reais
   * Armazenado como número para facilitar cálculos
   * Deve ser formatado para exibição
   * @example 350.00 // R$ 350,00
   */
  valor: number;
  
  /** 
   * Status atual da consulta no sistema
   * Controla o fluxo e as ações permitidas
   * Valores possíveis: "agendada" | "confirmada" | "cancelada" | "realizada"
   */
  status: StatusConsulta;
  
  /** 
   * Observações adicionais sobre a consulta (opcional)
   * Pode conter informações relevantes como:
   * - Motivo da consulta
   * - Sintomas relatados
   * - Orientações específicas
   * - Histórico resumido
   * @example "Paciente relata dores no peito há 3 dias"
   */
  observacoes?: string;
}