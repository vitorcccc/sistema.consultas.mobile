import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

/**
 * Módulo: Sistema de Consultas Médicas - Interface Mobile
 * 
 * Este componente implementa a interface principal do sistema de consultas médicas,
 * permitindo visualizar e gerenciar o status de uma consulta específica.
 * 
 * Funcionalidades:
 * - Visualização detalhada de informações da consulta
 * - Atualização do status (confirmar/cancelar)
 * - Formatação de valores monetários e datas no padrão brasileiro
 * - Feedback visual baseado no status da consulta
 */

// Importação das interfaces e tipos definidos anteriormente
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

/**
 * Componente principal da aplicação
 * Gerencia o estado da consulta e renderiza a interface completa
 */
export default function App() {
  // ==================== DADOS BASE ====================
  /**
   * Dados simulados que representariam as informações vindas do backend
   * Em uma aplicação real, estes dados viriam de uma API
   */
  
  /** Especialidade médica - Cardiologia */
  const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
    descricao: "Cuidados com o coração",
  };

  /** Médico responsável pela consulta */
  const medico1: Medico = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
  };

  /** Paciente que será atendido */
  const paciente1: Paciente = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
    telefone: "(11) 98765-4321",
  };

  // ==================== ESTADO DA CONSULTA ====================
  /**
   * Estado que armazena os dados da consulta atual
   * Utiliza a interface Consulta para garantir type safety
   * 
   * Status possíveis:
   * - "agendada": Consulta recém-criada, aguardando ação
   * - "confirmada": Consulta confirmada pelo paciente/sistema
   * - "cancelada": Consulta cancelada
   */
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 2, 10), // 10/03/2026 (mês 2 = Março)
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  // ==================== FUNÇÕES DE MANIPULAÇÃO ====================
  
  /**
   * Confirma a consulta alterando seu status para "confirmada"
   * Utiliza spread operator para manter as outras propriedades inalteradas
   */
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  /**
   * Cancela a consulta alterando seu status para "cancelada"
   * Utiliza spread operator para manter as outras propriedades inalteradas
   */
  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada",
    });
  }

  // ==================== FUNÇÕES DE FORMATAÇÃO ====================
  
  /**
   * Formata um valor numérico para o formato de moeda brasileira (R$)
   * @param valor - Número a ser formatado
   * @returns String formatada (ex: R$ 350,00)
   */
  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  /**
   * Formata uma data para o padrão brasileiro (dd/mm/aaaa)
   * @param data - Objeto Date a ser formatado
   * @returns String formatada (ex: 10/03/2026)
   */
  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  // ==================== RENDERIZAÇÃO ====================
  return (
    <View style={styles.container}>
      {/* StatusBar do Expo - controla a aparência da barra de status do dispositivo */}
      <StatusBar style="light" />
      
      {/* ScrollView permite rolagem caso o conteúdo seja maior que a tela */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* ===== CABEÇALHO ===== */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
          <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>

        {/* ===== CARD PRINCIPAL DA CONSULTA ===== */}
        <View style={styles.card}>
          
          {/* 
            Badge de status - muda de cor baseado no status atual
            Aplica classes condicionais baseadas no valor de consulta.status
          */}
          <View style={[
            styles.statusBadge,
            consulta.status === "confirmada" && styles.statusConfirmada,
            consulta.status === "cancelada" && styles.statusCancelada,
          ]}>
            <Text style={styles.statusTexto}>{consulta.status.toUpperCase()}</Text>
          </View>

          {/* ===== SEÇÃO: INFORMAÇÕES DO MÉDICO ===== */}
          <View style={styles.secao}>
            <Text style={styles.label}>👨‍⚕️ Médico</Text>
            <Text style={styles.valor}>{consulta.medico.nome}</Text>
            <Text style={styles.info}>CRM: {consulta.medico.crm}</Text>
            <Text style={styles.info}>{consulta.medico.especialidade.nome}</Text>
          </View>

          {/* ===== SEÇÃO: INFORMAÇÕES DO PACIENTE ===== */}
          <View style={styles.secao}>
            <Text style={styles.label}>👤 Paciente</Text>
            <Text style={styles.valor}>{consulta.paciente.nome}</Text>
            <Text style={styles.info}>CPF: {consulta.paciente.cpf}</Text>
            <Text style={styles.info}>Email: {consulta.paciente.email}</Text>
            {/* Renderização condicional - só mostra telefone se existir */}
            {consulta.paciente.telefone && (
              <Text style={styles.info}>Tel: {consulta.paciente.telefone}</Text>
            )}
          </View>

          {/* ===== SEÇÃO: DADOS DA CONSULTA ===== */}
          <View style={styles.secao}>
            <Text style={styles.label}>📅 Dados da Consulta</Text>
            <Text style={styles.valor}>Data: {formatarData(consulta.data)}</Text>
            <Text style={styles.valor}>Valor: {formatarValor(consulta.valor)}</Text>
            {/* Renderização condicional - só mostra observações se existirem */}
            {consulta.observacoes && (
              <Text style={styles.observacoes}>{consulta.observacoes}</Text>
            )}
          </View>

          {/* ===== BOTÕES DE AÇÃO ===== */}
          <View style={styles.acoes}>
            {/* 
              Renderização condicional baseada no status:
              - Se "agendada": mostra botões de confirmar/cancelar
              - Se "confirmada": mostra mensagem de sucesso
              - Se "cancelada": mostra mensagem de cancelamento
            */}
            {consulta.status === "agendada" && (
              <>
                <View style={styles.botaoContainer}>
                  <Button
                    title="Confirmar Consulta"
                    onPress={confirmarConsulta}
                    color="#4CAF50" // Verde
                  />
                </View>
                <View style={styles.botaoContainer}>
                  <Button
                    title="Cancelar Consulta"
                    onPress={cancelarConsulta}
                    color="#F44336" // Vermelho
                  />
                </View>
              </>
            )}
            {consulta.status === "confirmada" && (
              <View style={styles.mensagem}>
                <Text style={styles.mensagemTexto}>✓ Consulta confirmada com sucesso!</Text>
              </View>
            )}
            {consulta.status === "cancelada" && (
              <View style={styles.mensagemCancelada}>
                <Text style={styles.mensagemTexto}>✗ Consulta cancelada</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// ==================== ESTILOS ====================
/**
 * Folha de estilos do componente
 * Utiliza StyleSheet.create para melhor performance e validação
 * Organizado por ordem de uso no componente
 */
const styles = StyleSheet.create({
  /** Container principal, ocupa toda a tela com fundo roxo */
  container: {
    flex: 1,
    backgroundColor: "#79059C",
  },
  /** Container do ScrollView com padding superior para StatusBar */
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  /** Container do cabeçalho com alinhamento centralizado */
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  /** Título principal - grande e branco */
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  /** Subtítulo - médio e branco com opacidade */
  subtitulo: {
    fontSize: 18,
    color: "#fff",
    opacity: 0.9,
  },
  /** Card principal - fundo branco com sombra */
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // Sombra para Android
  },
  /** Badge de status - laranja por padrão */
  statusBadge: {
    backgroundColor: "#FFA500",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  /** Badge de status - verde para confirmada */
  statusConfirmada: {
    backgroundColor: "#4CAF50",
  },
  /** Badge de status - vermelho para cancelada */
  statusCancelada: {
    backgroundColor: "#F44336",
  },
  /** Texto do badge de status - branco em negrito */
  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  /** Seção de informações com borda inferior */
  secao: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  /** Label da seção - roxo em negrito */
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#79059C",
    marginBottom: 8,
  },
  /** Valor principal - maior e escuro */
  valor: {
    fontSize: 18,
    color: "#333",
    marginBottom: 4,
  },
  /** Informação secundária - menor e cinza */
  info: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  /** Observações - itálico */
  observacoes: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginTop: 8,
  },
  /** Container dos botões de ação */
  acoes: {
    marginTop: 10,
  },
  /** Container individual de botão com margem inferior */
  botaoContainer: {
    marginBottom: 12,
  },
  /** Mensagem de sucesso - fundo verde claro */
  mensagem: {
    backgroundColor: "#E8F5E9",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
  },
  /** Mensagem de cancelamento - fundo vermelho claro */
  mensagemCancelada: {
    backgroundColor: "#FFEBEE",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#F44336",
  },
  /** Texto das mensagens - centralizado */
  mensagemTexto: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
  },
});