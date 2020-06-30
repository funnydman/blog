from django.urls import path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('api/login', views.login, name='login'),
    path('signup', TemplateView.as_view(template_name='index.html'))
]
