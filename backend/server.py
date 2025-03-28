from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/heartbeat', methods=['GET'])
def get_heartbeat():
    simulated_heart_rate = random.randint(60, 120)
    return jsonify({"heart_rate": simulated_heart_rate})

if __name__ == "__main__":
    app.run(debug=True, port=5000)

