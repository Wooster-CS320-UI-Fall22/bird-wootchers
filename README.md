# PokeTeam Builder
## Bird Wootchers

### Project Description:
Our group's project is a team builder to serve as reference for the Pokemon video games, especially Pokemon Red, Blue, and Yellow.  The team builder allows users to add various pokemon to a team to see, at a glance, the team's type strengths and weaknesses.  The project also features a pokedex, for users to reference pokemon stats on the fly, and a social component, where users can view the teams of other users and upload their own to the social page.   As as whole, PokeTeam Builder is a team builder designed to be responsive, easy to use, and social.


### Developer Bios: 
####  Taemour Zaidi
Taemour Zaidi is a Mathematics and Computer Science major at the College of Wooster.  Currently in his third year, he is working on diversifying and improving his portfolio and resume through projects and internships, and plans on pursuing a career in front end development.

#### Solomon Gebrekiros
Solomon Gebrekiros is a Computer Science major from Ethiopia.  He is currently a senior at the College of Wooster.  For his senior independent study, he is working on making a student planner that schedules students' assignments for them.  One of his goals for the future is to travel the world.

#### Amy Falk
Amy Falk has been tinkering with computers since she was a 10-year old making games using Scratch.  She is currently a junior at the College of Wooster, pursuing a Computer Science major and a Theater minor.  Post-graduation, she is planning on working in the field of theater production.

### Application Setup
#### First time setup:
(note: this installation guide assumes python3 already installed on the user's computer.)
 1. Open a terminal in the "bird-wootchers" folder.
 2. Install the venv folder by running the command "py -3 -m venv venv" on Windows or "python3 -m venv venv" on OS X or Linux.
 3. Activate the environment by running the command "venv\Scripts\activate" on Windows or "venv/bin/activate" on OS X or Linux.
 4. Install Flask by running the command "pip install Flask".
 5. Run Flask by running the command  "flask run".
 6. In a private tab, go to the URL localhost:5000.
 7. PokeTeam Builder should now be up and running!

#### Future setup:
 1.   Activate the environment by running the command "venv\Scripts\activate" on Windows or "venv/bin/activate" on OS X or Linux.
 2. Run Flask by running the command  "flask run".
 3. In a private tab, go to the URL localhost:5000.
 4. PokeTeam Builder should now be up and running!


## How to use the application
### Login page
#### Logging in
[Logging into PokeTeam Builder](https://drive.google.com/file/d/1yFm7Yr4-zsdYa10TqI_BTr4ray8OLRTd/view?usp=sharing) is remarkably easy-- the site contains no login credential system at all!  It's best to specify any username in the username field for the social purposes of the site, but otherwise, simply press the login button to enter the site proper.

### Home page

The home page contains links to the three main pages of the site:  The new team page, the browse teams page, and the Pokedex.  As you can see in this [reference](https://drive.google.com/file/d/15ztQTEguAOqSpzHtGbEkjrH5TF74ul9X/view?usp=sharing), we've logged into the site with the name moss.

### New team
[The new team page](https://drive.google.com/file/d/1cy_LEtYVi_SSAVregENxXqKFPAxUQ7lj/view?usp=sharing) is where the team building itself actually takes place.  Noteworthy on this page are 6 sets of dropdown menus + images, 15 text elements on the right side of the page, and a button labelled "share" at the bottom of the page.   To start building a team of pokemon, pick a pokemon from one of the dropdown menus, by either scrolling through the menu or typing its name in.  [In this example image](https://drive.google.com/file/d/17jlCk3LLdAwA3DYbx5n6bewZPjFM-5cy/view?usp=sharing), moss has chosen Venasaur to be the third pokemon in their team.  

Looking at this image, we can see that the numbers on the right of the page changed when Venosaur was selected.  These numbers represent your Pokemon team's overall strengths and weaknesses against attacks of different types.  An optimal team has as many positive numbers, and as few negative numbers, as possible.  [If we look at moss's finished team](https://drive.google.com/file/d/1vbTGF_wFFPhzPDm6lfkv7Cz1lhMMKdec/view?usp=sharing), we can see that it does well against fighting type attacks, but poorly against bug type attacks.  

We can share this team by clicking the share button on the bottom of the screen, at which point the team will be recorded and added to the Browse Teams page.  We will get [this popup](https://drive.google.com/file/d/1sT3CBQ15uokSEWaP4w38dQAr9AaLCKba/view?usp=sharing) on a successful share.  Note that to share a team, it must have 6 pokemon.

### Browse teams
[The Browse Teams page](https://drive.google.com/file/d/1gVhkkK7WmPjpuJ2GGRVnRkB6Ov5oKot0/view?usp=sharing) consists of a list of the various teams different users have uploaded to the site, next to their username.  Each team has a rating denoting the popularity of the team.  We can use the search functionality to find a specific user's team [by searching for their username](https://drive.google.com/file/d/10WGI9uW3-p1BTcQFDP6DrpLruorxD2y-/view?usp=sharing).  If we scroll to the bottom of the page (or search for "moss") we can see that [moss's team has been added to the page](https://drive.google.com/file/d/1bgPRFcMrdvd4U2uxX7ram1r7G04EAGbl/view?usp=sharing).

### Pokedex
[The Pokedex page](https://drive.google.com/file/d/1J1FD5-gelbv1-BEbedzB9UgMCGWS7b35/view?usp=sharing) serves a reference for users to assist in their team building.  It displays every pokemon in the site, along with their number, image, name, types, HP, attack stat, defense stat, special stat, and speed stat.  [By changing the setting on the dropdown menu](https://drive.google.com/file/d/1J1FD5-gelbv1-BEbedzB9UgMCGWS7b35/view?usp=sharing) at the top of the page from between "Name" and "Type", you can search for pokemon in the Pokedex by either [name](https://drive.google.com/file/d/1xwM5Eg-FTzpCyp65guKIbuqSsau-sl_y/view?usp=sharing) or [type](https://drive.google.com/file/d/1jQ3wY26kRTPBbgQ0dWkf19u9QgmrRZDY/view?usp=sharing).

### navbar

[The navbar](https://drive.google.com/file/d/1phinmchOF-FxLuxRnvF-Bn53SOo2BrX8/view?usp=sharing) that exists at the top of the home page, new team page, browse teams page, and pokedex page works similar to the home page in the sense that it provides links to the new team page, browse teams page, and pokedex.  It also features a log out button in the top right that will take the user back to the home page.
