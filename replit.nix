# For hosting on replit
# There can be minor changes in the code 

{ pkgs }: {
  deps = [
    pkgs.nodejs-16_x
      pkgs.nodePackages.typescript-language-server
      pkgs.nodePackages.yarn
      pkgs.replitPackages.jest
  ];
}