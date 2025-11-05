from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({'message': 'Bem-vinda à API do portfólio de Vanderleia Paula'})

@app.route('/projects')
def projects():
    return jsonify([
        {'id': 1, 'name': 'Frontend Portfólio', 'tech': ['HTML','CSS','JS']},
        {'id': 2, 'name': 'Backend API Flask', 'tech': ['Python','Flask']}
    ])

if __name__ == '__main__':
    app.run(debug=True, port=5000)
