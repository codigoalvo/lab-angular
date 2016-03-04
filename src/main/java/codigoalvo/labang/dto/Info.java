package codigoalvo.labang.dto;

import java.io.Serializable;

public class Info implements Serializable {

	private static final long serialVersionUID = 7144216352954062544L;

	private String chave;
	private String valor;

	public Info() {
	}

	public Info(String chave, String valor) {
		this();
		this.chave = chave;
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "Info [chave=" + this.chave + ", valor=" + this.valor + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((this.chave == null) ? 0 : this.chave.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		Info other = (Info) obj;
		if (this.chave == null) {
			if (other.chave != null) {
				return false;
			}
		} else if (!this.chave.equals(other.chave)) {
			return false;
		}
		return true;
	}

	public String getChave() {
		return this.chave;
	}

	public String getValor() {
		return this.valor;
	}

	public void setChave(String chave) {
		this.chave = chave;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

}
