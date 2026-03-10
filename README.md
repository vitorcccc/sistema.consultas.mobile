# Sistema de Consultas Médicas - Mobile

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

## INTEGRANTES DO GRUPO

| Nome | RM |
|------|-----|
| **Isadora Meneghetti** | RM556326 |
| **Gustavo Ikeda** | RM554718 |
| **Henrique Azevedo** | RM556707 |
| **Renato Alvarenga** | RM556403 |
| **Victoria Moura** | RM555474 |

---

## SOBRE O PROJETO

Este é um aplicativo mobile de **Sistema de Consultas Médicas** desenvolvido em React Native com TypeScript como parte das atividades da disciplina. O aplicativo permite visualizar e gerenciar consultas médicas, com funcionalidades completas de gerenciamento de status e interface intuitiva.

### Funcionalidades Implementadas

- Visualização detalhada de consultas médicas
- Gerenciamento de status (agendada, confirmada, cancelada, realizada)
- Confirmação e cancelamento de consultas
- Formatação de valores monetários (R$)
- Formatação de datas no padrão brasileiro
- Tipagem forte com TypeScript
- Interface responsiva com cards
- Feedback visual baseado no status
- ScrollView para conteúdo extenso
- StatusBar personalizada

---

## LINK DO REPOSITÓRIO

**Repositório principal:** [https://github.com/isadorameneghetti/sistema-consultas-mobile](https://github.com/isadorameneghetti/sistema-consultas-mobile)

**Branch do projeto:** `main`

---

## CONCEITOS DE REACT NATIVE UTILIZADOS

Este projeto foi desenvolvido aplicando todos os conceitos abordados em aula:

| Conceito | Descrição |
|----------|-----------|
| **Componentes Funcionais** | Uso de funções como componentes React |
| **Hooks (useState)** | Gerenciamento de estado da consulta |
| **Props** | Passagem de dados entre componentes (quando aplicável) |
| **TypeScript** | Tipagem forte para prevenir erros |
| **Interfaces e Types** | Definição de modelos de dados |
| **Renderização Condicional** | Exibição de botões baseada no status |
| **Estilização com StyleSheet** | Criação de estilos organizados |
| **ScrollView** | Suporte a rolagem de conteúdo |
| **StatusBar** | Personalização da barra de status |
| **Flexbox** | Layout responsivo e adaptável |
| **Shadow/Elevation** | Efeitos visuais em cards |

---

## CONCEITOS DE TYPESCRIPT UTILIZADOS

| Conceito | Descrição |
|----------|-----------|
| **Type Aliases** | Criação de tipos personalizados |
| **Interfaces** | Definição de contratos para objetos |
| **Union Types** | Status da consulta com valores pré-definidos |
| **Optional Properties** | Campos opcionais (telefone, descrição, observações) |
| **Type Safety** | Garantia de tipos em tempo de compilação |
| **Import/Export** | Modularização do código |

---

## ESTRUTURA DE TIPOS E INTERFACES

### StatusConsulta
```typescript
type StatusConsulta = "agendada" | "confirmada" | "cancelada" | "realizada";
```

### Especialidade
```typescript
type Especialidade = {
  id: number;
  nome: string;
  descricao?: string;
};
```

### Paciente
```typescript
type Paciente = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
};
```

### Medico
```typescript
interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
}
```

### Consulta
```typescript
interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}
```

---

## COMO EXECUTAR O PROJETO

### Pré-requisitos
- [Node.js](https://nodejs.org/) (16.0 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) no celular (iOS/Android)
- Visual Studio Code (recomendado)

### Passos para executar

1. **Clone o repositório**
```bash
git clone https://github.com/isadorameneghetti/sistema-consultas-mobile
```

2. **Acesse a pasta do projeto**
```bash
cd consultas-medicas
```

3. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

4. **Execute o projeto**
```bash
npx expo start
# ou
npm start
```

5. **Abra no celular**
- Escaneie o QR Code com o aplicativo Expo Go (Android)
- Ou escaneie com a câmera do iPhone (iOS)

---

## COMO USAR O APLICATIVO

### Tela Principal

Ao iniciar o aplicativo, você verá:

1. **Cabeçalho**: Título do sistema e número da consulta
2. **Card da Consulta**: Informações completas organizadas em seções
3. **Status Badge**: Indicador visual do status atual
4. **Seção do Médico**: Nome, CRM e especialidade
5. **Seção do Paciente**: Nome, CPF, email e telefone
6. **Seção da Consulta**: Data, valor e observações
7. **Botões de Ação**: Confirmar/Cancelar (quando aplicável)

### Gerenciamento de Status

- **Status "agendada"**: Exibe botões para confirmar ou cancelar
- **Status "confirmada"**: Mostra mensagem de sucesso
- **Status "cancelada"**: Mostra mensagem de cancelamento

### Funcionalidades

- **Confirmar Consulta**: Altera status para "confirmada"
- **Cancelar Consulta**: Altera status para "cancelada"
- **Visualização Completa**: Todos os dados em um único card

---

## EXEMPLO DE EXECUÇÃO

```text
=== SISTEMA DE CONSULTAS ===
Consulta #1

┌─────────────────────────────────┐
│        AGENDADA                 │
├─────────────────────────────────┤
│ 👨‍⚕️ MÉDICO                      │
│ Dr. Roberto Silva               │
│ CRM: CRM12345                   │
│ Cardiologia                     │
├─────────────────────────────────┤
│ 👤 PACIENTE                     │
│ Carlos Andrade                  │
│ CPF: 123.456.789-00             │
│ Email: carlos@email.com         │
│ Tel: (11) 98765-4321            │
├─────────────────────────────────┤
│ 📅 DADOS DA CONSULTA            │
│ Data: 10/03/2026                │
│ Valor: R$ 350,00                │
│ Consulta de rotina              │
├─────────────────────────────────┤
│ [Confirmar Consulta]            │
│ [Cancelar Consulta]             │
└─────────────────────────────────┘
```

### Após Confirmar

```text
┌─────────────────────────────────┐
│        CONFIRMADA ✅            │
├─────────────────────────────────┤
│ ... (mesmas informações)        │
├─────────────────────────────────┤
│ ✓ Consulta confirmada com       │
│   sucesso!                      │
└─────────────────────────────────┘
```

### Após Cancelar

```text
┌─────────────────────────────────┐
│        CANCELADA ❌             │
├─────────────────────────────────┤
│ ... (mesmas informações)        │
├─────────────────────────────────┤
│ ✗ Consulta cancelada            │
└─────────────────────────────────┘
```

---

## ESTRUTURA DE PASTAS

```
consultas-medicas/
│
├── src/
│   ├── types/
│   │   ├── especialidade.ts
│   │   ├── paciente.ts
│   │   └── statusConsulta.ts
│   │
│   └── interfaces/
│       ├── medico.ts
│       └── consulta.ts
│
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

---

## TECNOLOGIAS UTILIZADAS

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento React Native
- **TypeScript**: Superset JavaScript com tipagem estática
- **React Hooks**: Gerenciamento de estado e efeitos
- **Expo StatusBar**: Controle da barra de status

---

## CONCEITOS APLICADOS

### React Native
- Componentização
- Estado e imutabilidade
- Renderização condicional
- Estilização com StyleSheet
- Layout responsivo

### TypeScript
- Tipagem estática
- Interfaces e Types
- Propriedades opcionais
- Union Types
- Type Safety

### Boas Práticas
- Código documentado
- Organização modular
- Nomenclatura consistente
- Validações de dados
- Feedback visual

---

## DISCIPLINA

**Mobile Development e IoT**

Professor: Hete Caetano dos Santos

FACULDADE FIAP - 2026

---

## LICENÇA

Este projeto foi desenvolvido para fins educacionais. Todos os direitos reservados aos autores.
