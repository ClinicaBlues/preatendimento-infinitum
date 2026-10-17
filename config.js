/* ============================================================================
   CLÍNICA INFINITUM — PRÉ-CONSULTA ONLINE · arquivo de configuração
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado no dia a dia.
   Altere apenas o que está entre aspas.

   Um link para cada médica (mesma página, muda só o final):
     .../?medica=marina     → Dra. Marina Hoehne (dermatologia)
     .../?medica=sabrina    → Dra. Sabrina Marmith (saúde corporal)
     .../?medica=franciele  → Dra. Franciele Oliveira (ortopedia e dor)
   ========================================================================== */

window.PRE_CONFIG = {

  // URL do robô (Google Apps Script) que recebe a ficha e envia o resumo
  // por e-mail para a médica. Instruções em LEIA-ME.md.
  // Enquanto estiver vazio, a página funciona em modo de teste (não envia).
  endpointUrl: "",

  // Senha simples entre o site e o robô. Precisa ser IGUAL à WRITE_KEY do Code.gs.
  writeKey: "infinitum-pre-2026",

  clinicName: "Clínica Infinitum",
  address: "Rua Úrsula Paulino, 1422 · sala 205 · Betânia · Belo Horizonte / MG",

  // WhatsApp que recebe o resumo e o PDF da pré-consulta (só dígitos: 55 + DDD + número).
  whatsappClinica: "5531997436696",

  // WhatsApp da recepção para dúvidas (opcional).
  supportWhatsapp: "5531997436696",

  // Link da política de privacidade (LGPD). Deixe "" se não houver.
  privacyUrl: "",

  medicas: {
    marina:    { nome: "Dra. Marina Hoehne",      area: "Dermatologia · pele, pintas e estética", crm: "CRM-MG 86157" },
    sabrina:   { nome: "Dra. Sabrina Marmith",    area: "Saúde corporal, emagrecimento e longevidade", crm: "CRM-MG 81674" },
    franciele: { nome: "Dra. Franciele Oliveira", area: "Ortopedia e tratamento da dor", crm: "CRM-MG 72395" }
  }
};
