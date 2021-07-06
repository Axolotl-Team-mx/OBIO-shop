from rest_framework import serializers
from base.models import Reviews

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'