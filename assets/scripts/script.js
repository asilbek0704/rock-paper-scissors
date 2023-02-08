let game = new Vue({
    el: ".wrapper",
    data: {
        playerScore: 0,
        AIScore: 0,
        countdown: 3,
        roles: ["rock", "paper", "scissors"],
        playerRole: "rock",
        AIRole: "rock",
        animation: false,
        finalResult: 3,
    },
    methods: {
        compare(role) {
            this.countdown = 3;

            this.animation = true;
            this.AIRole = "rock";
            this.playerRole = "rock";

            this.animation == true ? this.scoreboard() : "";


            setTimeout(() => {
                this.AIRole =
                    this.roles[this.randomRole(this.roles.length - 1, 0)];
                this.playerRole = role;
                this.result(this.playerRole, this.AIRole);
                this.animation = false;
            }, 1500);

        },

        randomRole(max, min) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        result(player, computer) {
            if (
                (player == "rock" && computer == "scissors") ||
                (player == "scissors" && computer == "paper") ||
                (player == "paper" && computer == "rock")
            ) {
                ++this.playerScore;
            } else if (player !== computer) {
                ++this.AIScore;
            }
        },

        scoreboard() {
            if(this.countdown > 0) {
                setTimeout(() => {
                    this.countdown--;
                    this.scoreboard()
                }, 500)
            }
        },

        reset() {
            this.playerScore = 0;
            this.AIScore = 0;
            this.playerRole = "rock",
            this.AIRole = "rock",
            this.animation = false,
            this.countdown = 3;
        },

        reload() {
            location.reload();
        }
    },
    computed: {
        playerSrc() {
            return `./assets/images/rock,paper&scissors/${this.playerRole}.png`;
        },
        AISrc() {
            return `./assets/images/rock,paper&scissors/${this.AIRole}.png`;
        },
    },
});
