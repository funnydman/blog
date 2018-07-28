from django.template.response import TemplateResponse


def home(request):
    return TemplateResponse(request, 'index.html', {})


def about(request):
    return TemplateResponse(request, 'index.html', {})
