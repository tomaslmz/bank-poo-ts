export class Cpf {
  constructor (private _cpf: string) {
    this.cpf = _cpf
  }

  set cpf (cpf: string) {
    try {
      if (!this.checkCpf(cpf)) {
        throw new Error('CPF is invalid!')
      }

      this._cpf = cpf
    } catch (e: any) {
      console.log(e.message)
    }
  }

  get cpf (): string {
    return this._cpf
  }

  checkCpf (cpf: string): boolean {
    const regex = /^(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2})$/
    return regex.test(cpf)
  }
}
