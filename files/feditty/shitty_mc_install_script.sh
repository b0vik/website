#!/bin/bash

pacman -Syu --needed --noconfirm jre17-openjdk tar sed tmux gawk autossh sudo wget
archlinux-java set java-17-openjdk
wget "https://b0vik.dev/files/feditty/papermc-1.20.4.b364.pkg.tar.zst"
pacman -U --noconfirm papermc-1.20.4.b364.pkg.tar.zst
echo "eula=true" >> /srv/papermc/eula.txt
systemctl start papermc
sleep 60
systemctl stop papermc
echo -e "[\n{\n\"uuid\": \"9f874253-f20b-4047-9968-ed5accddd105\",\n\"name\": \"asolidtime\",\n\"level\": 4,\n\"bypassesPlayerLimit\": false\n}\n]" > /srv/papermc/ops.json # lol
systemctl start papermc
sleep 60
autossh -M 0 -o "StrictHostKeyChecking=no" -R 33945:localhost:25565 serveo.net