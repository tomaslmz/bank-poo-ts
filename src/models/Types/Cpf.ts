export class Cpf {
  constructor (private _cpf: string) {}

  set cpf (cpf: string) {
    if (this.checkCpf(cpf)) {
      this._cpf = cpf
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
