var foot = {
    kick: function () {
        this.yelp = "Aïeuh !";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();
