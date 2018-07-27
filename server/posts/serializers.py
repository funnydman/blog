from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'pub_date', 'last_modified')
        read_only_fields = ('id', 'pub_date')
