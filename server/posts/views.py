from rest_framework import viewsets
from posts.serializers import PostSerializer
from posts.models import Post


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
