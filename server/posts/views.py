from rest_framework import viewsets, permissions
from rest_framework.pagination import PageNumberPagination
from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer


class PostPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Post.objects.filter(is_published=True)
    serializer_class = PostSerializer
    pagination_class = PostPagination


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
