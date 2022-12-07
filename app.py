from flask import Flask, render_template, request
import os
import json

template_dir = os.path.abspath('.')
static_dir = os.path.abspath('images')
app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

@app.route('/', methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/shareteam", methods=["POST"])
def share_team():
    jsdata = json.loads(request.data.decode())
    with open('images/data/teams.csv', 'a') as team_data:
        team_data.write(f"{jsdata['poke1']},{jsdata['poke2']},{jsdata['poke3']},{jsdata['poke4']},{jsdata['poke5']},{jsdata['poke6']},{jsdata['rating']},{jsdata['username']}\n")    
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

@app.route('/<name>', methods=["GET"])
def passthru(name=''):
    return render_template(name)

if __name__ == '__main__':
    app.run(debug=True, host="localhost")