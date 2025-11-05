# API do Portfólio — Backend

Pequena API em Flask para retornar dados de projetos.

## Como rodar

```bash
python -m venv venv
source venv/bin/activate  # venv\Scripts\activate no Windows
pip install -r requirements.txt
python app.py
```

A API ficará disponível em `http://127.0.0.1:5000/`.

Rotas:
- `/` — mensagem de boas-vindas
- `/projects` — lista de projetos em JSON
