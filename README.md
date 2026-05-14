# .desktop Creator

Gera arquivos `.desktop` para Linux a partir de variáveis de ambiente.

---

## Contexto

Aplicações aparecem no menu do sistema Linux através de arquivos `.desktop`. Criá-los manualmente é repetitivo e sujeito a erros. Este script automatiza a geração com base em um `.env` simples.

---

## Pré-requisitos

- Node.js >= 12
- pnpm >= 10

---

## Uso

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/VitaoDeveloper/DotDesktop_Creator.git
cd DotDesktop_Creator
pnpm install
```

Copie o arquivo de exemplo e preencha com os dados da sua aplicação:

```bash
cp .env.example .env
```

```env
NAME=meu app
COMMENT=Descrição da aplicação
EXEC_DIR=/caminho/do/executavel
ICON_DIR=/caminho/do/icone.png
CATEGORIES=Utility;
```

Gere o arquivo:

```bash
pnpm dev
```

O arquivo `.desktop` será criado na raiz do projeto com o nome em camelCase — `meuApp.desktop`.

---

## Instalação do arquivo gerado

```bash
# Para o usuário atual
mv meuApp.desktop ~/.local/share/applications/

# Para todos os usuários (requer sudo)
sudo mv meuApp.desktop /usr/share/applications/

# Atualize a exibição dos apps
sudo update-desktop-database
```

---

## Variáveis

| Variável     | Descrição                                           | Exemplo                      |
|--------------|-----------------------------------------------------|------------------------------|
| `NAME`       | Nome da aplicação (define também o nome do arquivo) | `meu app`                    |
| `COMMENT`    | Descrição curta                                     | `Editor de texto`            |
| `EXEC_DIR`   | Caminho para o executável                           | `/usr/bin/myapp`             |
| `ICON_DIR`   | Caminho para o ícone                                | `/usr/share/icons/myapp.png` |
| `CATEGORIES` | Categorias do menu, separadas por `;`               | `Development;Utility;`       |

---

## Exemplo de saída

Entrada:

```env
NAME=my cool app
COMMENT=An awesome application
EXEC_DIR=/opt/mycoolapp/mycoolapp
ICON_DIR=/opt/mycoolapp/icon.png
CATEGORIES=Development;
```

Arquivo gerado — `myCoolApp.desktop`:

```ini
[Desktop Entry]
Name=My Cool App
Comment=An awesome application
Exec=/opt/mycoolapp/mycoolapp
Icon=/opt/mycoolapp/icon.png
Categories=Development;
Type=Application
Terminal=false
```

---

## Licença

ISC