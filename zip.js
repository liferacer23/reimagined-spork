const shell = require("shelljs");

if (!shell.which("git")) {
  shell.echo("Please install git");
  shell.exit(1);
}

shell.exec("git diff -U1 HEAD ':(exclude)*.diff' > result.diff");
