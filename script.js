function preTypeWriter(radio) {
    const txtCss = `body {
    margin: 0;
    padding: 0;
    font-family: Georgia, serif;
    font-size: 16px;
}

header {
    position: fixed;
    top: 0;
}`;

    const txtPython = `import random


def get_random_elem(arr: list) -> any:
    weights = [i for i in range(len(arr), 0, -1)]
    return random.choices(arr, weights=weights)[0]
    

def tester(arr: list) -> str:
    my_dict = {}
    result = ''
    for elem in arr:`;

    const txtJavascript = `class Device {
    constructor(name, maxPower){
        this.name = name;
        this.maxPower = maxPower;
        this.currentPower = 0;
        this.connect = false;
    }
    toggle() {
        this.connect = !this.connect;`;

    const txtHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <title>CV</title>
</head>
<body>
    <header>`;

    const txtDjango = `from django.db import models
from django.contrib.auth.models import User
from django.core.cache import cache
from django.utils.translation import gettext as _
from django.utils.translation import pgettext_lazy

class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)`;

    const txtRestapi = `from rest_framework import serializers
from chat.models import Account
from chat.models import Room
from chat.models import Message
from rest_framework import status
from rest_framework.response import Response


class AccountSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)`;

    const txtPandas = `import pandas as pd
import numpy as np

df = pd.DataFrame(
    {
        "one": pd.Series(np.random.randn(3), index=["a", "b", "c"]),
        "two": pd.Series(np.random.randn(4), index=["a", "b", "c", "d"]),
        "three": pd.Series(np.random.randn(3), index=["b", "c", "d"]),
    }
)`;
    const i = 0;
    const result = "";
    let txt;
    let headerName;
    switch(radio.value) {
        case "css": 
            txt = txtCss;
            headerName ="style.css";
            break;
        case "python": 
            txt = txtPython;
            headerName ="python.py";
            break;
        case "javascript":
            txt = txtJavascript;
            headerName ="script.js";
            break;
        case "html":
            txt = txtHtml;
            headerName ="index.html";
            break;
        case "django":
            txt = txtDjango;
            headerName ="models.py";
            break;
        case "restapi":
            txt = txtRestapi;
            headerName ="sserializers.py";
            break;
        case "pandas":
            txt = txtJavascript;
            headerName ="pandas.py";
            break;
        default:
            txt = "Ошибка!";
            headerName ="None";
            break;
      }
    document.getElementById("text-editor_name").innerHTML = headerName;
    document.getElementById("text-editor_code").innerHTML = "";
    let interval = typeWriter(txt, i, result);
}

function typeWriter(txt, i, result) {
    const speed = 20;
    const space = '<span class="text-editor_space">&nbsp;</span>';
    if (i < txt.length) {
        result += txt.charAt(i).replace("<", "&lt;").replace("<", "&gt;");
        document.getElementById("text-editor_code").innerHTML = result + space;
        i++;
        interval = setTimeout(typeWriter, speed, txt, i, result);
    } else {
        i = 0;
        result = "";
        document.getElementById("text-editor_code").innerHTML = "";
        clearTimeout(interval);
        interval = setTimeout(typeWriter, speed, txt, i, result);
    }
}

// Typing
const radios = document.getElementsByName('radio');
for (let radio of radios) {
    radio.addEventListener('change', function(e) {
        if (radio.checked) {
            if (typeof interval != 'undefined') {
                clearTimeout(interval);
            }
            preTypeWriter(radio);
        }
    });
}

// Scrolling
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const anchor = smoothLink.getAttribute('href');

        document.querySelector(anchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
