type Pagamento = "cartao" | "pix" | "boleto"
type Status = "pago" | "processando" | "falha"

export interface Venda {
    id: string,
    nome: string,
    preco: number,
    status: Status,
    pagamento: Pagamento,
    parcelas: number,
    data: string
}