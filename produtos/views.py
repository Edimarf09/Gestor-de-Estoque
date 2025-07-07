from django.shortcuts import render

# Create your views here.

def produtos(request):
    return render(request, 'produtos/pages/produtos.html', context={
        'name': 'produtos'
    })