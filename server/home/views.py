from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.template.response import TemplateResponse
from rest_framework import viewsets
from home.serializer import PostSerializer
from home.models import Post


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer


def home(request):
    return TemplateResponse(request, 'index.html', {})
